import CommentList from "./CommentList";

export default {
  component: CommentList,
  title: "CommentList",
};

export const Paginated = {
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

export const HasData = {
  args: {
    comments: [...Paginated.args.comments.slice(0, 3)],
    totalCount: 3,
  },
};

export const Loading = {
  args: {
    comments: [],
    loading: true,
  },
};

export const Empty = {
  args: {
    ...Loading.args,
    loading: false,
  },
};
