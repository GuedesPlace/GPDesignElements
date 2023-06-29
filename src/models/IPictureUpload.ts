export enum PictureUploadStatus {
    SELECTED = "selected",
    UPLOADING = "uploading",
    UPLOADED = "uploaded",
    ERROR = "error"
}
export interface IPictureUpload {
    id:string;
    file:File;
    status:PictureUploadStatus;
    errorInformation?:string;

}
export interface IPictureUploadAnswer {
    id:string;
    status:PictureUploadStatus;
    errorInformation?:string;
}