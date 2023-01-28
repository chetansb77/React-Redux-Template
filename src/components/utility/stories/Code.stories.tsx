import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Code from "../Code";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
// eslint-disable-next-line @typescript-eslint/consistent-type-assertions
export default {
  title: "Component/Utility/Code",
  component: Code,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Code>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
// eslint-disable-next-line react/function-component-definition, react/jsx-props-no-spreading
const Template: ComponentStory<typeof Code> = (args) => <Code {...args} />;

export const CodeMessage = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
CodeMessage.args = {};
