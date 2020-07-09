import faker from 'faker';
import ILocation from './ILocation';

export default class User implements ILocation {
    private name: string;
    location: {
        latitude: number;
        longitude: number;
    }

    get Location(){
        return this.location;
    }

    get Name(){
        return this.name;
    }

    constructor(){
        this.name = faker.name.findName();
        this.location = {
            latitude: parseFloat(faker.address.latitude()),
            longitude: parseFloat(faker.address.longitude())
        }
    }
    getContent(): string {
        return `<p>Hi, my name is ${this.name}</p>`;
    }
}