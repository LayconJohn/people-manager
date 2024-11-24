import { Controller, Post } from '@nestjs/common';
import { PeopleService } from './people.service';

@Controller('people')
export class PeopleController {
  constructor(private readonly peopleService: PeopleService) {}

  @Post('create')
  async create() {
    await this.peopleService.create()
  }
}
