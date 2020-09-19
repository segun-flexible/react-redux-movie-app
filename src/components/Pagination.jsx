import React from "react";
const Pagination = (props) => {
  let pages = [];
  if (props.postArr > 0) {
    for (let i = 1; i <= Math.ceil(props.postArr / props.pages); i++) {
      pages.push(i);
    }
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination justify-content-center mb-0 pb-0">
        {pages.length > 0 &&
          pages.map((p) => (
            <li
              key={p}
              className={
                props.activePage === p ? "page-item active" : "page-item"
              }
            >
              <button
                className="page-link"
                onClick={() => props.setCurrentPage(p)}
              >
                {p}
              </button>
            </li>
          ))}
      </ul>
    </nav>
  );
};

export default Pagination;

/*
Props That Is Require
            activePage={pageInfo.currentPage}
            setCurrentPage={setCurrentPage}
            pages={pageInfo.postPerPage}
            postArr={posts.length}

*/
