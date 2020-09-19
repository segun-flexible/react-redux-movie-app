import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { addToFavouriteBtn, setLoading } from "../../redux/actions";
import FilterSearch from "../FilterSearch";
import useTitle from "../Hooks/useTitle";
import Pagination from "../Pagination";
import FavouriteList from "./FavouriteList";
import EmptyList from "../EmptyList";
import reduceSearch from "../functions/reduceSearch";
import LoadingUI from "../Loading";
const Favourite = (props) => {
  //Set The Title
  useTitle("Favourite");

  //Initially Setting The Post
  useEffect(() => {
    setPost([...props.favourite]);
    props.setLoading(false);
  }, [props.favourite]);

  const [pageInfo, setPageInfo] = useState({
    currentPage: 1,
    postPerPage: 4,
  });
  //Post State
  const [posts, setPost] = useState([]);

  //Pages Func
  let end = pageInfo.currentPage * pageInfo.postPerPage;

  let start = end - pageInfo.postPerPage;

  const setCurrentPage = (currentPage) => {
    setPageInfo({ ...pageInfo, currentPage });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const favouriteCount = posts.length;

  //Search FIlter
  const searchFilterFunc = (searchTerm, type) => {
    const [newPost] = reduceSearch(props.favourite, searchTerm, type);
    setPost(newPost);
  };

  return (
    <>
      <div
        className="tab-pane fade active show p-4"
        id="sidebar-1-2"
        role="tabpanel"
        aria-labelledby="sidebar-1-2"
      >
        <div className="d-sm-flex align-items-center justify-content-between mb-3">
          <h1 className="h5 mb-0 text-gray-900">Favourite</h1>
          {/* Reset Filter Button */}
          <button
            onClick={() => setPost([...props.favourite])}
            className="d-block d-sm-inline-block btn btn-sm btn-primary shadow-sm"
          >
            Reset Filters <i className="fas fa-times fa-sm text-white-50"></i>
          </button>
          <span className="d-sm-inline-block text-xs">
            Showing{" "}
            {favouriteCount > 1
              ? `${favouriteCount} Items`
              : `${favouriteCount} Item`}
          </span>
        </div>
        {props.loading ? (
          <LoadingUI />
        ) : (
          <div className="row">
            {props.favourite.length < 1 ? (
              <EmptyList name="Favourite List" />
            ) : (
              <>
                <FilterSearch passSearchFilter={searchFilterFunc} />
                <div className="col-xl-9 col-lg-8">
                  <div className="row">
                    {/* Fav List Start Here */}

                    {posts.slice(start, end).map((f) => (
                      <FavouriteList
                        movie={f}
                        key={f.id}
                        removeFav={props.addToFavouriteBtn}
                      />
                    ))}

                    {/* Fav List End Here */}
                  </div>
                  <Pagination
                    activePage={pageInfo.currentPage}
                    setCurrentPage={setCurrentPage}
                    pages={pageInfo.postPerPage}
                    postArr={posts.length}
                  />
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </>
  );
};
function mapStateToProps(state) {
  return {
    favourite: state.favourite,
    loading: state.loading,
  };
}
export default connect(mapStateToProps, { addToFavouriteBtn, setLoading })(
  Favourite
);
