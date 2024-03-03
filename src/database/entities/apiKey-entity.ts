import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Application } from './application.entity';

@Entity()
export class ApiKey {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Application, (application) => application.apiKeys)
  application: Promise<Application>;
}
