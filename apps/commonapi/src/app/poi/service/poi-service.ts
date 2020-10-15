import { inject } from 'inversify';
import { provideSingleton } from '../../util/injection';
import { PoiRepo } from '../dao';


@provideSingleton(PoiService)
export class PoiService {
    constructor(@inject(PoiRepo) private poiRepo: PoiRepo){}

    async getAllPoi(){
        return this.poiRepo.getAllPoi();
    }
}