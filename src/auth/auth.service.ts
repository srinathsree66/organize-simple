import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  validateApiKey(apiKey: string): boolean {
    const validApiList = ['12345', '54321'];

    return validApiList.includes(apiKey);
  }
}
