const api = (query) => {
  let result;
  fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=a8e054f1b8707f684448a851439659e4&query=${query}
  `,
    { method: "get" }
  )
    .then((res) => res.json())
    .then((res) => new Promise((done, rej) => done("Hello Woe")));
};

export default api;
