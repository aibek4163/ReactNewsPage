import { users } from "./DataUsers";
export let news = [
  {
    category: "sports",
    title: "Test Sport",
    description: "Description",
    url:
      "https://cdn.cnn.com/cnnnext/dam/assets/210212095302-claressa-shields-large-169.jpg",
    date: new Date().toLocaleTimeString(),
  },
  {
    category: "technologies",
    title: "Test Technology",
    description: "Description",
    url:
      "https://cdn.cnn.com/cnnnext/dam/assets/201119122945-mbrsc-lunar-rover-medium-tease.jpg",
    date: new Date().toLocaleTimeString(),
  },
  {
    category: "politics",
    title: "Test Politics",
    description: "Description",
    url:
      "https://cdn.cnn.com/cnnnext/dam/assets/210214145441-putin-musk-split-large-169.jpg",
    date: new Date().toLocaleTimeString(),
  },
  {
    category: "business",
    title: "Test Business",
    description: "Description",
    url:
      "https://cdn.cnn.com/cnnnext/dam/assets/210211174203-joe-biden-february-11-2021-01-large-169.jpg",
    date: new Date().toLocaleTimeString(),
  },
];

export let blogs = [
  {
    user: {
      name: "Test",
      surname: "User",
      picture:
        "https://instagram.fala4-2.fna.fbcdn.net/v/t51.2885-15/e35/p1080x1080/69346680_193688824984207_4064035453099566949_n.jpg?_nc_ht=instagram.fala4-2.fna.fbcdn.net&_nc_cat=107&_nc_ohc=6BXJnLUnaFAAX9Z13Kz&tp=1&oh=d097d6ca45fd3c701cb016bdb89ac935&oe=60579604",
    },
    text: "Test Blog",
    date: new Date().toLocaleTimeString(),
  },
];

// user: {
//   url: users[0].picture,
//   email: users[0].email,
//   name: users[0].name,
//   surname: users[0].surname,
// },
