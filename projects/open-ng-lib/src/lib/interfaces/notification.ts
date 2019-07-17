import { OpenNgNotificationType } from '../enumerations/notification-type';

export interface OpenNgNotification {
  type: OpenNgNotificationType;
  message: string;
}
