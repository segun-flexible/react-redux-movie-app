const popularity = (p) => {
  let val = Math.round(p);

  return val > 100 ? `${100}%` : `${val}%`;
};

export default popularity;
