import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Text } from "@fluentui/react";
import { Page } from "./page";
import { GPLayout } from "./navigation";

const meta: Meta<typeof GPLayout> = {
  component: GPLayout,
  title: "01. Complete/All",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof GPLayout>;

export const ApplicationAndContent: Story = (args: any) => (
  <GPLayout data-testId="InputField-id" {...args} />
);
ApplicationAndContent.args = {
  title: "This is Loggedin",
  linkItems: [{
    id: 'dasboardId',
    title: 'The Dasboard',
    onClick: (id) => console.log(id)
  },
  {
    id: 'createId',
    title: 'CREATE',
    onClick: (id) => console.log(id)
  }
  ],
  userInformation: {
    commonName: "John Doe",
    eMail: "j@doe.family",
    oganisationName: "Does graeat big Family"
  },
  applicationItems: [
    { title: 'Photos', iconName: "PhotoVideoMedia", id: 'photos', onClick: () => console.log("photos") },
    { title: 'Profile', iconName: "ProfileSearch", id: 'profiles', onClick: (id) => console.log(id) }
  ],
  version: "0.1.9-beta22",
  applicationInformations: [{
    id: "memory",
    title: "Used Memory: 50 GB",
    onClick: (id) => console.log(id)
  }, {
    id: "memory2",
    title: "Free Memory: 5 GB",
    onClick: (id) => console.log(id)
  }],
  selectedApplicationId: "photos",
  children: <>
    <Page title="Page minimal Attributes setted"
      navigationItems={[
        {
          links: [
            {
              name: 'Home',
              url: 'http://example.com',
              expandAriaLabel: 'Expand Home section',
              links: [
                {
                  name: 'Activity',
                  url: 'http://msn.com',
                  key: 'key1',
                  target: '_blank',
                },
                {
                  name: 'MSN',
                  url: 'http://msn.com',
                  disabled: true,
                  key: 'key2',
                  target: '_blank',
                },
              ],
              isExpanded: true,
            },
            {
              name: 'Documents',
              url: 'http://example.com',
              key: 'key3',
              isExpanded: true,
              target: '_blank',
            },
            {
              name: 'Pages',
              url: 'http://msn.com',
              key: 'key4',
              target: '_blank',
            },
            {
              name: 'Notebook',
              url: 'http://msn.com',
              key: 'key5',
              disabled: true,
            },
            {
              name: 'Communication and Media',
              url: 'http://msn.com',
              key: 'key6',
              target: '_blank',
            },
            {
              name: 'News',
              url: 'http://cnn.com',
              icon: 'News',
              key: 'key7',
              target: '_blank',
            },
          ],
        },
      ]}><Text variant="medium">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text></Page></>
};


