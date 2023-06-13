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
    title: "GP Minimal Attributes setted"
};

export const WithHeaderLinks: Story = (args: any) => (
    <GPLayout data-testId="InputField-id" {...args} />
);
WithHeaderLinks.args = {
    title: "HeaderLinks",
    linkItems: [{
        id: 'dasboardId',
        title: 'The Dasboard',
        onClick: (id: string) => console.log(id)
    },
    {
        id: 'createId',
        title: 'CREATE',
        onClick: (id: string) => console.log(id)
    }
    ]
};
export const LoggedIn: Story = (args: any) => (
    <GPLayout data-testId="InputField-id" {...args} />
);
LoggedIn.args = {
    title: "This is Loggedin",
    linkItems: [{
        id: 'dasboardId',
        title: 'The Dasboard',
        onClick: (id: string) => console.log(id)
    },
    {
        id: 'createId',
        title: 'CREATE',
        onClick: (id: string) => console.log(id)
    }
    ],
    userInformation:{
        commonName:"John Doe",
        eMail:"j@doe.family",
        oganisationName:"Does graeat big Family"
    }
};


