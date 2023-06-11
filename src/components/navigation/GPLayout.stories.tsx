import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { GPLayout } from "./GPLayout";

const meta: Meta<typeof GPLayout> = {
    component: GPLayout,
    title: "Basic/GPLayout",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof GPLayout>;

export const Basic: Story = (args: any) => (
    <GPLayout data-testId="InputField-id" {...args} />
);
Basic.args = {
    title:"GP Minimal Attributes setted"
};

