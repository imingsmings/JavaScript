import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  UseInterceptors,
  ParseIntPipe,
} from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { PersonGuard } from './person.guard';
import { TimeoutInterceptor } from 'src/timeout/timeout.interceptor';

@Controller('person')
@UseGuards(PersonGuard)
@UseInterceptors(TimeoutInterceptor)
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Post('/create')
  create(@Body() createPersonDto: CreatePersonDto) {
    return this.personService.create(createPersonDto);
  }

  @Get()
  findAll() {
    return this.personService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.personService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePersonDto: UpdatePersonDto) {
    return this.personService.update(+id, updatePersonDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: string) {
    console.log('person delete ---' + id);
    return this.personService.remove(+id);
  }
}
