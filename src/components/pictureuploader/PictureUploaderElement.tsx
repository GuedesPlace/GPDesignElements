import React from "react";
import { IPictureUpload, IPictureUploadAnswer, PictureUploadStatus } from "../../models";
import { PrimaryButton, Stack, StackItem, Text } from "@fluentui/react";
import { DropZone } from "./DropZone";
import { v4 as uuidv4 } from 'uuid';
import { mapFileListToArray } from "../../utils";
import { Thumbnail } from "./Thumbnail";

export interface IPictureUploaderProps {
    title?: string;
    instructions?: string;
    fileTypes?: string[];
    iconName?: string;
    uploadStatus: IPictureUploadAnswer[];
    onUploadStart: (picturesToUpload: IPictureUpload[]) => void;
}

const createPictureUpload = (file: File): IPictureUpload => ({
    id: uuidv4(),
    file: file,
    status: PictureUploadStatus.SELECTED
});


export const PictureUploader: React.FunctionComponent<IPictureUploaderProps> = (props: IPictureUploaderProps) => {
    const [currentFiles, setCurrentFiles] = React.useState<IPictureUpload[]>([]);
    const [addFiles, setAddFiles] = React.useState<IPictureUpload[]>([]);
    const fileInputRef = React.useRef<null | HTMLInputElement>(null);
    const uploadDisabled = React.useMemo(() => currentFiles.filter(f => f.status == PictureUploadStatus.SELECTED).length == 0, [currentFiles]);
    React.useEffect(() => {
        const newFilesToAdd = addFiles.filter(f=>!currentFiles.find(cf=>cf.id == f.id));
        setCurrentFiles([...currentFiles, ...newFilesToAdd]);
    }, [addFiles]);
    React.useEffect(()=>{
        const allFiles = [...currentFiles];
        if (props.uploadStatus) {
            props.uploadStatus.forEach(f=>{
                const fCurrent = allFiles.find(fc=>fc.id == f.id);
                if (fCurrent) {
                    fCurrent.status = f.status;
                    fCurrent.errorInformation = f.errorInformation;
                }
            });
        }
        setCurrentFiles(allFiles);
    },[props.uploadStatus]);
    const handleChange = (event: any) => {
        event.preventDefault();
        const files = mapFileListToArray(event.target.files);
        setAddFiles(files.map(createPictureUpload));
        if (fileInputRef && fileInputRef.current) {
            fileInputRef.current.value = '';
        }

    }
    const handleUpload = (files: IPictureUpload[]) => {
        const allFiles: IPictureUpload[] = [];
        const filesToUpload = files.filter(f => f.status == PictureUploadStatus.SELECTED);
        files.forEach((f) => {
            if (f.status == PictureUploadStatus.SELECTED) {
                f.status = PictureUploadStatus.UPLOADING;
            }
            allFiles.push(f);
        });
        props.onUploadStart(filesToUpload);
        setCurrentFiles(allFiles);
    }
    return <Stack>
        {props.title ? <StackItem><Text variant="large">{props.title}</Text></StackItem> : null}
        {props.title && props.instructions ? <StackItem><hr></hr></StackItem> : null}
        {props.instructions ? <StackItem><Text variant="medium" >
            {props.instructions}
        </Text></StackItem> : null}
        <StackItem align="center" style={{ marginTop: "20px" }}>
            <input onChange={handleChange} multiple={false} ref={fileInputRef} type='file' hidden />
            <DropZone
                onClick={() => fileInputRef.current?.click()}
                onDropFiles={(f) => setAddFiles(f.map(createPictureUpload))}
            />
        </StackItem>
        <Text>Files selected: {currentFiles.length}</Text>
        <Stack horizontal wrap tokens={{ childrenGap: "5px" }}>{currentFiles.map(file =>
            <Thumbnail key={file.id} picture={file} onRemove={(id) => setCurrentFiles(currentFiles.filter((f) => f.id != id))}></Thumbnail>)}
        </Stack>
        <StackItem>
            <Stack horizontal horizontalAlign="end">
                <PrimaryButton
                    disabled={uploadDisabled}
                    text="Upload"
                    onClick={() => handleUpload(currentFiles)} /></Stack>
        </StackItem>

    </Stack>
}