import type { Meta, StoryObj } from "@storybook/react";
import SearchBar from "../components/searchBar";

const meta: Meta<typeof SearchBar> = {
  title: "SearchBar",
  component: SearchBar,
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Home: Story = {};
