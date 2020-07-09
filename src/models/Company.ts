import faker from 'faker';
import ILocation from './ILocation';

export default class Company implements ILocation {
    companyName: string;
    catchPhase: string
    location: {
        latitude: number;
        longitude: number;
    }
    constructor(){
        this.companyName = faker.company.companyName();
        this.catchPhase = faker.company.catchPhrase();
        this.location = {
            latitude: parseFloat(faker.address.latitude()),
            longitude: parseFloat(faker.address.longitude()),
        }
    }
    getContent(): string {
        return `<div>
                <h1>Company name is ${this.companyName}.</h1>
                <h3>Our catch phase is ${this.catchPhase}</h3>
                </div>`
    }
    
}