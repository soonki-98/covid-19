import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ListComponent from "../components/ListComponents";

export default {
  title: "Example/ListComponent",
  component: ListComponent,
} as ComponentMeta<typeof ListComponent>;

const Template: ComponentStory<typeof ListComponent> = ({ lists, direction }) => (
  <ListComponent lists={lists} direction={direction} />
);

export const Primary = Template.bind({});
Primary.args = {
  lists: ["hi", "hello"],
  direction: "row",
};
