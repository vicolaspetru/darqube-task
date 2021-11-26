import { PAGINATION } from "@Store/actions/pagination";

export type SetCurrentPage = {
  type: typeof PAGINATION.SET_CURRENT_PAGE;
  payload: number;
};

export type SetTotalPosts = {
  type: typeof PAGINATION.SET_TOTAL_POSTS;
  payload: number;
};

export type SetPostsPerPage = {
  type: typeof PAGINATION.SET_POSTS_PER_PAGE;
  payload: number;
};

export type PaginationActions = SetCurrentPage | SetTotalPosts | SetPostsPerPage;
