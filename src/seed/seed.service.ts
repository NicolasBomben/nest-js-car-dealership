import { Injectable } from '@nestjs/common';
import { CarsService } from 'src/cars/cars.service';
import { BrandService } from 'src/brand/brand.service';
import { CARS_SEED } from './data/cars.seed';
import { BRAND_SEED } from './data/brand.seed';

@Injectable()
export class SeedService {
  constructor(
    private readonly carsService: CarsService,
    private readonly brandService: BrandService,
  ) {}
  populateDb() {
    this.carsService.fillsCarsWithSeedData(CARS_SEED);
    this.brandService.fillsBrandsWithSeedData(BRAND_SEED);
    return 'SEED CHARGE';
  }
}
