const numberPagination = (currentPage, postPerPage, arr) => {
  let start = (currentPage - 1) * postPerPage;
  let end = start + postPerPage;
  /* let newArray = arr.splice(start,end) */
  let pages = [];
  for (let i = 1; i < Math.ceil(arr.length / postPerPage); i++) {
    pages.push(i);
  }

  return {
    pages,
    start,
    end,
  };
};

export default numberPagination;
