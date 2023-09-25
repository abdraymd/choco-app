import { GeoStatus } from '../enum/geo-status.enum';
import { NotificationStatus } from '../enum/notification-status.enum';

export interface IRahmetWebApp {
    onAuthSuccess: (trackId: string) => unknown;
    onAuthSuccessV2: (code: string, state: any) => unknown;
    onAuthDismissed: () => unknown;
    onPaySuccess: () => unknown;
    onNativePayViewClosed: () => unknown;
    onGeoPermissionStatusDefined: (status: GeoStatus) => GeoStatus | void;
    didBecomeActive: Function;
    onBackPressed: () => boolean;
    didScanQrText: (text: string) => string | void;
    didGetReferralCode: (code: string) => unknown;
    onKeyboardClosed: Function;
    didGetIsNotificationStatus: (status: NotificationStatus) => NotificationStatus | void;
}
