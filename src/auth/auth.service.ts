import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ApiKey } from 'src/database/entities/apiKey-entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(ApiKey) private apiKeyRepository: Repository<ApiKey>,
  ) {}
  async validateApiKey(apiKey: string) {
    const apiKeyExists = await this.apiKeyRepository.findOneBy({ id: apiKey });
    console.log('Apikey exists', !!apiKeyExists);
    return !!apiKeyExists;
  }
}
