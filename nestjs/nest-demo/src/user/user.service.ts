import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getUserList() {
    return [
      {
        id: 1,
        name: 'tom',
      },
    ];
  }
}
