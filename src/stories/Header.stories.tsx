import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Header, { HeaderProps } from "./Header";

// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: "Example/Header",
  component: Header,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Header>;

// eslint-disable-next-line react/function-component-definition, react/jsx-props-no-spreading
const Template: ComponentStory<typeof Header> = (args: HeaderProps) => (
  // eslint-disable-next-line react/jsx-props-no-spreading
  <Header {...args} />
);

export const LoggedIn = Template.bind({});
LoggedIn.args = {
  user: {
    name: "Jane Doe",
  },
};

export const LoggedOut = Template.bind({});
LoggedOut.args = {};
