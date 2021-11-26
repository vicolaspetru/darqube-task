import { Post } from "@Models/Post";
import { AddToBookmarks, RemoveFromBookmarks } from "@Store/types/bookmarks";
import createNamespace from "@Utils/createNamespace";

export const BOOKMARKS = createNamespace("BOOKMARKS", ["ADD", "REMOVE"] as const);

export const addToBookmarks = (payload: Post): AddToBookmarks => ({
  type: BOOKMARKS.ADD,
  payload
});

export const removeFromBookmarks = (payload: Post): RemoveFromBookmarks => ({
  type: BOOKMARKS.REMOVE,
  payload
});
