import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Contact } from './models/contact/contact.entity';
import { ContactService } from './services/contact.service';
import { ContactController } from './controllers/contact.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'contact_user',
      password: 'contact_password',
      database: 'contact_db',
      entities: [Contact],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Contact]),
  ],
  controllers: [ContactController],
  providers: [ContactService],
})
export class AppModule {}
