import { provideSingleton } from "../../util/injection";
import {Poi} from '@pocrepo/model';
import * as faker from 'faker';
@provideSingleton(PoiRepo)
export class PoiRepo{
    private min_lat = 48.601679;
    private max_lat = 46.956644;
    private min_long = 1.282174;
    private max_long =  2.940907;
    constructor(){
        faker.setLocale("fr");
    }

    getAllPoi():Poi[]{
        return Array.from({length: 100}, ()=>{
            const city = faker.address.city();
            return {
                name: `Poi at ${city}`,
                description: `A Point of interest in the fine city of ${city}`,
                coordinates: {
                    latitude: faker.address.latitude(this.min_lat, this.max_lat),
                    longitude: faker.address.longitude(this.min_long, this.max_long)
                }
            }
        });
    }
}