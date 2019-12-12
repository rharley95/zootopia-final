import { Injectable } from '@angular/core';

@Injectable()
export class Case {

    constructor(
        public id: string,
        public name: string,
        public description: string,
        ) {

    }

}
