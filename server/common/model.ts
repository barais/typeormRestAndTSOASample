import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Photo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 100,
  })
  name: string;

  @Column('text')
  description: string;

  @Column()
  filename: string;

  @Column('double')
  views: number;

  @Column()
  isPublished: boolean;
}

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: '' })
  firstName: string;

  @Column()
  name: string;

  @Column({ default: 18 })
  age: number;

  @Column({ default: '' })
  email: string;

  @Column({
    type: 'enum',
    enum: ['Happy', 'Sad'],
    default: 'Happy',
  })
  status?: 'Happy' | 'Sad';

  @Column({ type: 'simple-array' })
  phoneNumbers: string[];
}
