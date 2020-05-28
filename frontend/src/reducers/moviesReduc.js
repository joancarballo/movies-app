const initState = {
  movies: [
    {
      title: "El Gran Lebowsky",
      genres: ["Drama"],
      watched: true,
    },
    {
      title: "Pulp Fiction",
      genres: ["Negro", "Crimenes"],
      watched: false,
    },
    {
      title: "Jurassic Park",
      genres: ["Aventuras", "Ciencia"],
      watched: false,
    },
  ],
};

const moviesReduc = (state = initState, action) => {
  return state;
};

export default moviesReduc;
