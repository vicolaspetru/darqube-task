import { Pagination } from "@Models/Pagination";
import { PAGINATION } from "@Store/actions/pagination";
import { PaginationActions } from "@Store/types/pagination";

export const initialState: Pagination = {
  currentPage: 1,
  postsPerPage: 6,
  totalPosts: 0
};

export default function reducer(state = initialState, action: PaginationActions): Pagination {
  switch (action.type) {
    case PAGINATION.SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload
      };
    case PAGINATION.SET_TOTAL_POSTS:
      return {
        ...state,
        totalPosts: action.payload
      };
    case PAGINATION.SET_POSTS_PER_PAGE:
      return {
        ...state,
        postsPerPage: action.payload
      };
    default:
      return state;
  }
}
