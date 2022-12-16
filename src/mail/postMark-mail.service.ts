import { Injectable } from "@nestjs/common";
import { MailService } from "./mail.service";

@Injectable()
export class PostMarkMailService implements MailService{
  sendEmail(): string {
    return "PostMark email";
  }
}