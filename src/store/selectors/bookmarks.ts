import { Store } from "@Models/Store";
import { Post } from "@Models/Post";

export const getBookmarksPosts = ({ bookmarks }: Store): Post[] =>
  bookmarks.posts.map((post: Post) => post);
