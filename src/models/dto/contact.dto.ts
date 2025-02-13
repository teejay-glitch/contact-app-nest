export interface CreateContactDto {
  name: string;
  email: string;
  phone: string;
}

export interface UpdateContactDto {
  id: number;
  name: string;
  email: string;
  phone: string;
}
