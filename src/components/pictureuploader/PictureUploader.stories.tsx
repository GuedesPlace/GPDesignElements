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
    title: "Do the Upload",
    instructions:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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