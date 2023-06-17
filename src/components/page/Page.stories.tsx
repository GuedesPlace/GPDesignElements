import React from "react";
import { Meta, StoryObj } from "@storybook/react";
import { Page } from "./PageElement";
import { Text } from "@fluentui/react";

const meta: Meta<typeof Page> = {
    component: Page,
    title: "Basic/Page",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Page>;

export const Basic: Story = (args: any) => (
    <Page data-testId="InputField-id" {...args} />
);
Basic.args = {
    title: "Page minimal Attributes setted"
};

export const BasicWithLoremIpsumText: Story = (args: any) => (
    <Page data-testId="InputField-id" {...args} />
);
BasicWithLoremIpsumText.args = {
    title: "Page minimal Attributes setted",
    children: <Text variant="medium">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Text>
};

export const BasicWithNavigationAndLoremIpsumText: Story = (args: any) => (
    <Page data-testId="InputField-id" {...args} />
);
BasicWithNavigationAndLoremIpsumText.args = {
    title: "Page minimal Attributes setted",
    children: <Text variant="medium">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Text>,
    navigationItems:[
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
      ]
};
