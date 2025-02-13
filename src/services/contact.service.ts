import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Contact } from 'src/models/contact/contact.entity';

@Injectable()
export class ContactService {
  constructor(
    @InjectRepository(Contact)
    private readonly contactRepository: Repository<Contact>,
  ) {}

  async createContact(name: string, email: string, phone: string): Promise<Contact> {
    const contact = this.contactRepository.create({ name, email, phone });
    return this.contactRepository.save(contact);
  }

  async UpdateContact(id: number, name: string, email: string, phone: string): Promise<void> {
    await this.contactRepository.update(id, {
      name,
      email,
      phone,
    });
  }

  async getAllContacts(): Promise<Contact[]> {
    return await this.contactRepository.find();
  }

  async getContactById(id: number): Promise<Contact | null> {
    return await this.contactRepository.findOne({ where: { id: id } });
  }

  async deleteContact(id: number): Promise<void> {
    await this.contactRepository.delete(id);
  }
}
