import type { Meta, StoryObj } from "@storybook/react-vite";

import CommentList from "./CommentList";

const meta = {
  component: CommentList,
  title: "CommentList",
} satisfies Meta<typeof CommentList>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Paginated: Story = {
  args: {
    comments: [
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
        author: {
          name: "Luke",
          avatar: "luke.jpeg",
        },
      },
      {
        text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        author: {
          name: "Leah",
          avatar: "leah.jpeg",
        },
      },
      {
        text: "Duis aute irure dolor in reprehenderit in voluptate.",
        author: {
          name: "Han",
          avatar: "han.jpeg",
        },
      },
      {
        text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
        author: {
          name: "Poe",
          avatar: "poe.jpeg",
        },
      },
      {
        text: "Duis aute irure dolor in reprehenderit in voluptate.",
        author: {
          name: "Finn",
          avatar: "finn.jpeg",
        },
      },
    ],
    totalCount: 10,
  },
};

export const HasData: Story = {
  args: {
    comments: [...(Paginated?.args?.comments?.slice(0, 3) || [])],
    totalCount: 3,
  },
};

export const Loading: Story = {
  args: {
    comments: [],
    loading: true,
  },
};

export const Empty: Story = {
  args: {
    ...Loading.args,
    loading: false,
  },
};
