import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Error from ".";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: "Component/Error",
  component: Error,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Error>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// eslint-disable-next-line react/function-component-definition, react/jsx-props-no-spreading
const Template: ComponentStory<typeof Error> = (args) => <Error {...args} />;

export const ErrorMessage = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
ErrorMessage.args = {};
