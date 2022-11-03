import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Clock from "./Clock";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Component/Clock",
  component: Clock,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
} as ComponentMeta<typeof Clock>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Clock> = (args) => <Clock {...args} />;

export const LongDate = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
LongDate.args = {
  timeType: 'long'
};

export const ShortDate = Template.bind({});
ShortDate.args = {
  timeType: "short",
};
