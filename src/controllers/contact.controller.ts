import { Get, Post, Body, Controller, Put, Delete, Param } from '@nestjs/common';
import { CreateContactDto, UpdateContactDto } from 'src/models/dto/contact.dto';
import { ContactService } from 'src/services/contact.service';

@Controller('contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post('/create')
  createContact(@Body() { name, email, phone }: CreateContactDto) {
    return this.contactService.createContact(name, email, phone);
  }

  @Put('/update')
  updateContact(@Body() { id, name, email, phone }: UpdateContactDto) {
    return this.contactService.UpdateContact(id, name, email, phone);
  }

  @Delete('/delete/:id')
  deleteContact(@Param('id') id: number) {
    return this.contactService.deleteContact(id);
  }

  @Get('/get-by-id/:id')
  getContactById(@Param('id') id: number) {
    return this.contactService.getContactById(id);
  }

  @Get('/get-all')
  getAllContacts() {
    return this.contactService.getAllContacts();
  }
}
