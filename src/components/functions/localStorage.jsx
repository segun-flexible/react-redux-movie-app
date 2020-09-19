export const saveToLocalStorage = (data, key) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getFromLocalStorage = (key) => {
  return new Promise((res, rej) => res(JSON.parse(localStorage.getItem(key))));
};
