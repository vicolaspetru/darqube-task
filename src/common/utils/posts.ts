import { Post } from "@Models/Post";
import { initialState } from "@Store/reducers/pagination";

export function getLatestPosts(posts: Post[]) {
  return posts.filter((_, index) => index > 0);
}

export function getLatestResearch(posts: Post[]) {
  return posts.filter((_, index) => index === 0);
}

export function getPaginatedPosts(
  posts: Post[],
  currentPage: number = 1,
  postsPerPage: number = initialState.postsPerPage
) {
  const lastPageIndex = currentPage * postsPerPage;
  const firstPageIndex = lastPageIndex - postsPerPage;

  return posts.slice(firstPageIndex, lastPageIndex);
}
