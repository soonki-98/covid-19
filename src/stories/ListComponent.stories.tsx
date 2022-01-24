import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import ListComponent from "../components/ListComponents";

export default {
  title: "Example/ListComponent",
  component: ListComponent,
} as ComponentMeta<typeof ListComponent>;

const Template: ComponentStory<typeof ListComponent> = ({ direction }) => (
  <ListComponent direction={direction}>hi</ListComponent>
);

export const Primary = Template.bind({});
Primary.args = {
  direction: "row",
};
