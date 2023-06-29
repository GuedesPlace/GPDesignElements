import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { useArgs } from '@storybook/client-api';
import { PictureUploader } from "./PictureUploaderElement";
import { IPictureUpload, PictureUploadStatus } from "../../models";

const meta: Meta<typeof PictureUploader> = {
    component: PictureUploader,
    title: "Basic/PictureUploader",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof PictureUploader>;

export const Basic: Story = (args: any) => { 
    const [_, updateArgs] = useArgs();
    const handleOnUploadStart = (files:IPictureUpload[])=>{
        files.forEach(f=>{
            const fNew = {...f};
            setTimeout(()=>{
                fNew.status = PictureUploadStatus.UPLOADED;
                const newUploadStatus = Basic.args?.uploadStatus ? [...Basic.args?.uploadStatus]:[];
                newUploadStatus.push(fNew);
                updateArgs({...args, uploadStatus:newUploadStatus} )
            },3000);
        })
    };
    return <PictureUploader data-testId="InputField-id" {...args} onUploadStart={handleOnUploadStart} />
};
Basic.args = {
    title: "Do the Upload",
    instructions:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    uploadStatus:[]
};
export const BasicNoTitle: Story = (args: any) => (
    <PictureUploader data-testId="InputField-id" {...args} />
);
BasicNoTitle.args = {
    instructions:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
};

export const BasicNoInstructions: Story = (args: any) => (
    <PictureUploader data-testId="InputField-id" {...args} />
);
BasicNoInstructions.args = {
    title: "Do the Upload",
};

export const BasicNoTitleAndInstructions: Story = (args: any) => (
    <PictureUploader data-testId="InputField-id" {...args} />
);
BasicNoTitleAndInstructions.args = {
};

export const BasicGeneratesError: Story = (args: any) => { 
    const [_, updateArgs] = useArgs();
    const handleOnUploadStart = (files:IPictureUpload[])=>{
        files.forEach(f=>{
            const fNew = {...f};
            setTimeout(()=>{
                fNew.status = PictureUploadStatus.ERROR;
                fNew.errorInformation = "Server was not ready. Service failed!"
                const newUploadStatus = Basic.args?.uploadStatus ? [...Basic.args?.uploadStatus]:[];
                newUploadStatus.push(fNew);
                updateArgs({...args, uploadStatus:newUploadStatus} )
            },3000);
        })
    };
    return <PictureUploader data-testId="InputField-id" {...args} onUploadStart={handleOnUploadStart} />
};
BasicGeneratesError.args = {
    title: "Do the Upload",
    instructions:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    uploadStatus:[]
};
