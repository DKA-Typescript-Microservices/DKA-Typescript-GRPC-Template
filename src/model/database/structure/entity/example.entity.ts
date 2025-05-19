import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { ModelConfig } from '../../../../config/const/model.config';
import * as moment from 'moment-timezone';

@Entity({ name: ModelConfig.example, schema: 'public' })
export class IExample {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({ type: 'text' })
  reference: string;
  @Column({ type: 'text' })
  organization: string;
  @Column({ type: 'text' })
  project: string;
  /** When Data Created **/
  @Column({
    type: 'jsonb',
    nullable: true,
    default: () => `jsonb_build_object(
      'humanize', '${moment().format('HH:mm:ss DD-MM-YYYY')}',
      'unix', ${moment().unix()}
    )`,
  })
  time_created: {
    humanize: string;
    unix: number;
  };

  /** When Data Updated **/
  @Column({
    type: 'jsonb',
    nullable: true,
  })
  time_updated: {
    humanize: string;
    unix: number;
  };

  /** When Data Deleted **/
  @Column({
    type: 'jsonb',
    nullable: true,
  })
  time_deleted: {
    humanize: string;
    unix: number;
  };
  /** States Of Data **/
  @Column({ type: 'boolean', nullable: true, default: true })
  status: boolean;
}