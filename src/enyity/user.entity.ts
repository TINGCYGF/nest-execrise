import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
//和数据库表对应
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 255 })
  title: string;

  @Column('text')
  description: string;

  @Column('text')
  content: string;

  @Column('int')
  status: number;
}