import React from "react";

import GenreCheckBoxSearch from "./genreCheckBoxSearch";
const FilterSearch = (props) => {
  const genreCheckBoxSearchFunc = (e) => {
    props.passSearchFilter(e, "genre");
  };
  return (
    <>
      <div className="col-xl-3 col-lg-4">
        {/* Mobile */}

        {/*         Mobile end */}
        <div className="filters shadow rounded bg-white mb-3  d-sm-block d-md-block">
          <div className="filters-header border-bottom p-3">
            <h6 className="m-0 text-dark">Filter By</h6>
          </div>
          <div className="filters-body">
            <div id="accordion">
              <div className="filters-card border-bottom p-3">
                <div className="filters-card-header" id="headingTwo">
                  <h6 className="mb-0">
                    <span
                      className="btn-link"
                      data-toggle="collapse"
                      data-target="#collapsetwo"
                      aria-expanded="true"
                      aria-controls="collapsetwo"
                    >
                      Genre
                    </span>
                  </h6>
                </div>
                <div
                  id="collapsetwo"
                  className="collapse show"
                  aria-labelledby="headingTwo"
                  data-parent="#accordion"
                >
                  <div className="filters-card-body card-shop-filters">
                    <form
                      onSubmit={(e) => e.preventDefault()}
                      className="filters-search mb-3"
                    >
                      <div className="form-group">
                        <i className="fas fa-search"></i>
                        <input
                          type="text"
                          onChange={(e) =>
                            props.passSearchFilter(e.target.value)
                          }
                          className="form-control"
                          placeholder="Start typing to search..."
                        />
                      </div>
                    </form>
                    <GenreCheckBoxSearch search={genreCheckBoxSearchFunc} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </>
  );
};

export default FilterSearch;
