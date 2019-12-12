import { Officer } from './officer.model';
import { MOCKOFFICERS } from './MOCKOFFICERS';
import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';


@Injectable()
export class OfficerService {
    officers: Officer[] = [];
    officerSelected = new EventEmitter<Officer>();
    officerChangedEvent: EventEmitter<Officer[]> = new EventEmitter<Officer[]>();
    officerListChangedEvent: Subject<Officer[]> = new Subject<Officer[]>();
    maxOfficerId: number;

    constructor(private http: HttpClient) {
        // this.officers = MOCKOFFICERS;
        this.maxOfficerId = this.getMaxId();
        this.getOfficers();
    }

    getOfficers(): void {
        this
            .http
            .get('http://localhost:3000/officers')
            .subscribe((officers: any) => {
                this.officers = officers.officers;
                this.maxOfficerId = this.getMaxId();
                this.officers.sort((current: Officer, next: Officer): number => {
                    if (current.id < next.id) {
                        return -1;
                    } else if (current.id === next.id) {
                        return 0;
                    } else {
                        return 1;
                    }
                });
                this.officerListChangedEvent.next(this.officers.slice());
            }, (err: any) => {
                console.error(err);
            });
    }

    getOfficer(id: string): Officer {

        // tslint:disable-next-line: prefer-const
        for (let officer of this.officers) {
            if (officer.id === id) {
                return officer;
            }
        }

        return null;
    }

    deleteOfficer(officer: Officer): void {
        if (!officer) {
            return;
        }

        const pos = this.officers.indexOf(officer);
        if (pos < 0) {
            return;
        }

        this.officers.splice(pos, 1);
        this
        .http
        .delete(`http://localhost:3000/officers/${officer.id}`)
        .subscribe(() => {
            this.officerListChangedEvent.next((this.officers.slice()));
        });

    }

    getMaxId() {
        let maxId = 0;
        for (let officer of this.officers) {
            let currentId = +officer.id;
            if (currentId > maxId) {
                maxId = currentId;
            }
        }

        return this.officers.length + 1;
    }

    addOfficer(officer: Officer) {
        if (!officer) {
            return;
        }

        this.maxOfficerId++;
        officer.id = (this.maxOfficerId).toString();
        this.officers.push(officer);
        this
            .http
            .post(`http://localhost:3000/officers`, officer
            ).subscribe(() => {
                this.officerListChangedEvent.next((this.officers.slice()));
            });
    }

    updateOfficer(originalOfficer: Officer, newOfficer: Officer) {
        if (!originalOfficer || !newOfficer) {
            return;
        }

        let pos = this.officers.indexOf(originalOfficer);
        if (pos < 0) {
            return;
        }

        newOfficer.id = originalOfficer.id;
        this.officers[pos] = newOfficer;

        this
            .http
            .put(`http://localhost:3000/officers/${newOfficer.id}`, newOfficer
            ).subscribe(() => {
                this.officerListChangedEvent.next((this.officers.slice()));
            });
        
    }

    storeOfficers(): void {
        let json = JSON.stringify(this.officers);
        let header = new HttpHeaders();
        header.set('Content-Type', 'application/json');
        this
            .http
            .put('https://localhost:3000/officers', json, {
                headers: header
            }).subscribe(() => {
                this.officerListChangedEvent.next((this.officers.slice()));
            });
    }

}
