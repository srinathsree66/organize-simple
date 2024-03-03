import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ApiKey } from './apiKey-entity';

@Entity()
export class Application {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name:string

  @OneToMany(()=>ApiKey,(apiKey)=>apiKey.application)

  apiKeys:Promise<ApiKey[]>

}
