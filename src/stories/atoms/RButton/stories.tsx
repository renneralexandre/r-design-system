import { RButton } from "./index";

export default {
  title: "Atoms/RButton",
  component: RButton,
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: {
        type: "inline-radio",
      },
    },
  },
};

export const Default = {
  args: {
    label: "Click me!!",
  },
};
