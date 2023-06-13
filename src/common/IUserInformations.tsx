export interface IUserInformation {
    commonName:string;
    eMail:string;
    oganisationName:string;
}

export enum UserInformationEventType {
    LOGOUT = "logout",
    LOGIN = "login",
    PROFILE = "profile",
    SETTINGS = "settings"
}