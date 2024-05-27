import {Module} from 'nestjs/common';
import {ProductController} from './products.controller';
import {ProductsService} from './products.service';
import {AppService} from '../app.service';

@Module({
    controllers: [ProductsController],
    providers: [ProductsService, AppService],
})

export class ProductsModule{}