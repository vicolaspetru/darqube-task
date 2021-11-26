import { Post } from "@Models/Post";
import { BOOKMARKS } from "@Store/actions/bookmarks";

export type AddToBookmarks = {
  type: typeof BOOKMARKS.ADD;
  payload: Post;
};

export type RemoveFromBookmarks = {
  type: typeof BOOKMARKS.REMOVE;
  payload: Post;
};

export type BookmarksActions = AddToBookmarks | RemoveFromBookmarks;
