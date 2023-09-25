import { connect } from '../utils';
import { NotificationStatus } from '../ts/enum/notification-status.enum';

export const getNotificationStatus = (): Promise<NotificationStatus> => {
    return connect((resolve: (status: NotificationStatus) => NotificationStatus) => {
        window.RahmetApp.getNotificationStatus();
        window.RahmetWebApp.didGetIsNotificationStatus = (status: NotificationStatus) => resolve(status);
    });
};

export const requestNotificationStatus = (): Promise<NotificationStatus> => {
    return connect((resolve: (status: NotificationStatus) => NotificationStatus) => {
        window.RahmetApp.requestNotificationStatus();
        window.RahmetWebApp.didGetIsNotificationStatus = (status: NotificationStatus) => resolve(status);
    });
};
