import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { PictureUploader } from "./PictureUploaderElement";

const meta: Meta<typeof PictureUploader> = {
    component: PictureUploader,
    title: "Basic/PictureUploader",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof PictureUploader>;

export const Basic: Story = (args: any) => (
    <PictureUploader data-testId="InputField-id" {...args} />
);
Basic.args = {
    title: "Page minimal Attributes setted"
};