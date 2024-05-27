import {Injectable} from 'nestjs/common';
import {AppService} from '../app.service'
@Injectable()
export class ProductsService{
    constructor(private readonly appService: AppService){}

    getProducts(): string{
        return this.appService.getHello()+' cars bikes'
    }

    getAllProducts(): string{
        return ['cars','bikes']
    }

}


