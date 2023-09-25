export interface IRahmetApp {
    authorize: () => void;
    authorizeV2?: (body: { client_id: string; response_type: 'code'; redirect_uri?: string; state?: '' }) => void;
    pay: (deeplink: string) => void;
    backToRahmetApp: () => void;
    isLocationEnabled?: () => boolean;
    requestGeoPermissionStatus: () => void;
    openQRScannerWithTextResult: () => void;
    hapticSelection: () => void;
    getReferralCode: () => void;
    loadBase64File?: (json: string) => void;
    shareImage?: (json: string) => void;
    shareText?: (text: string) => void;
    clearCache?: () => void;
    reloadPage?: () => void;
    getNotificationStatus: () => void;
    requestNotificationStatus: () => void;
}
