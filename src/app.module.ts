import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MailService } from './mail/mail.service';
import { SMTPMailService } from './mail/smtp-mail.service';
import { PostMarkMailService } from './mail/postMark-mail.service'

@Module({
  imports: [],
  controllers: [AppController],
  providers: [{
    provide: MailService,
    useClass: PostMarkMailService
  }],
})
export class AppModule {}
