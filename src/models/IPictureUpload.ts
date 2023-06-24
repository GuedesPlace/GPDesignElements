export enum PictureUploadStatus {
    SELECTED = "selected",
    UPLOADING = "uploading",
    UPLOADED = "uploaded"
}
export interface IPictureUpload {
    id:string;
    file:File;
    status:PictureUploadStatus;

}