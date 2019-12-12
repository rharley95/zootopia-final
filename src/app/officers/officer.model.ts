import { Injectable } from '@angular/core';

@Injectable()
export class Officer {

    constructor(
        public id: string,
        public name: string,
        public description: string,
        public email: string,
        public phone: string,
        public img: string
        ) {

    }

}
