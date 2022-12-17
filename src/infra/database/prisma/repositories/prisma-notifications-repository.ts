import { Injectable } from "@nestjs/common";
import { Notification } from "src/app/entities/notification";
import { NotificationsRepository } from "../../../../app/repositories/notifications-repository";
import { PrismaService } from "../prisma.service";

@Injectable()
export class PrismaNotificationRepository implements NotificationsRepository{
  constructor(private prismaService: PrismaService){

  }
  
  async create(notification: Notification): Promise<void> {
    await this.prismaService.notification.create({
      data: {
        id: notification.id,
        category: notification.category,
        content: notification.content.value,
        recipientId: notification.recipientId,
        readAt: notification.readAt,
        createdAt: notification.createdAt
      }
    })
  }
}