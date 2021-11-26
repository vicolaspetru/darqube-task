import { Pagination } from "./Pagination";
import { Post } from "./Post";

export interface IBookmarks {
  posts: Post[];
}

export interface ISearch {
  value: string;
}

export interface Store {
  bookmarks: IBookmarks;
  pagination: Pagination;
  search: ISearch;
}
