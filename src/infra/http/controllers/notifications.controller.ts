import { Body, Controller, Post } from '@nestjs/common';
import { SendNotification } from 'src/app/use-cases/send-notification';
import { CreateNotificationBody } from '../dtos/create-notification-body';

@Controller("notifications")
export class NotificationsController {

  constructor(private sendNotification: SendNotification){}

  // @Post("teste")
  // async create(@Body() body: CreateNotificationBody){
  //   const { recipientId, category, content} = body;

  //   const { notification} = await this.sendNotification.execute({
  //     recipientId,
  //     category,
  //     content
  //   })

  //   return { notification }
  // }
}
