import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  users = [
    {
      id: 1,
      email: 'reebal@citrok.com',
      createAt: new Date(),
    },
    {
      id: 2,
      email: 'Haris@citrok.com',
      createAt: new Date(),
    },
    {
      id: 3,
      email: 'Junaid@citrok.com',
      createAt: new Date(),
    },
  ];
  findCustomerById(id: number) {
    return this.users.find((user) => user.id === id);
  }
}
