import React from "react";
import { IPictureUpload, PictureUploadStatus } from "../../models";
import { IconButton, Stack, StackItem, Text, mergeStyles } from "@fluentui/react";
import { DropZone } from "./DropZone";
import { v4 as uuidv4 } from 'uuid';

export interface IPictureUploaderProps {
    title?: string;
    instructions?: string;
    fileTypes?: string[];
    iconName?: string;
    uploadStatus: IPictureUpload[];
    onUploadStart: (picturesToUpload: IPictureUpload[]) => void;
}

const createPictureUpload = (file:File):IPictureUpload => ({
    id:uuidv4(),
    file:file,
    status:PictureUploadStatus.SELECTED
});


export const PictureUploader: React.FunctionComponent<IPictureUploaderProps> = (props: IPictureUploaderProps) => {
    const [currentFiles,setCurrentFiles] = React.useState<IPictureUpload[]>([]);
    const addFiles = React.useCallback((files:File[])=>{
        const allFiles = files.map(createPictureUpload);
        setCurrentFiles([...currentFiles,...allFiles]);
    },[currentFiles]);
    return <Stack>
        <StackItem><Text variant="large">Der Titel</Text></StackItem>
        <hr></hr>
        <StackItem><Text variant="medium" >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </Text></StackItem>
        <StackItem align="center" style={{marginTop:"20px"}}>
            <DropZone 
                onClick={() => console.log("click")} 
                onDropFiles={addFiles}
                    />
        </StackItem>
        <Text>Files selected: {currentFiles.length}</Text>
    </Stack>
}