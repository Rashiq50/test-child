import type { Meta, StoryObj } from "@storybook/react";
import AddressNeeded from "../components/addressNeeded";

const meta: Meta<typeof AddressNeeded> = {
  title: "AddressNeeded",
  component: AddressNeeded,
};

export default meta;
type Story = StoryObj<typeof AddressNeeded>;

export const Index: Story = {};
