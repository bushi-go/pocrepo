import { Poi } from '@pocrepo/model';
import { inject } from 'inversify';
import { BaseHttpController, controller, httpGet } from "inversify-express-utils";
import { PoiService } from '../service';


@controller('/api/poi')
export class PoiApi extends BaseHttpController{
    @inject(PoiService) private poiService: PoiService;

    @httpGet('')
    private async getPois(): Promise<Poi[]>{
        return this.poiService.getAllPoi();
    }
}