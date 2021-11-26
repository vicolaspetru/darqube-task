import { PaginationActions } from "@Store/types/pagination";
import createNamespace from "@Utils/createNamespace";

export const PAGINATION = createNamespace("PAGINATION", [
  "SET_CURRENT_PAGE",
  "SET_TOTAL_POSTS",
  "SET_POSTS_PER_PAGE"
] as const);

export const setCurrentPage = (payload: number): PaginationActions => ({
  type: PAGINATION.SET_CURRENT_PAGE,
  payload
});

export const setTotalPosts = (payload: number): PaginationActions => ({
  type: PAGINATION.SET_TOTAL_POSTS,
  payload
});

export const setPostsPerPage = (payload: number): PaginationActions => ({
  type: PAGINATION.SET_POSTS_PER_PAGE,
  payload
});
