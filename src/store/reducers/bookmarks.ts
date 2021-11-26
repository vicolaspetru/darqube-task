import { IBookmarks } from "@Models/Store";
import { BOOKMARKS } from "@Store/actions/bookmarks";
import { BookmarksActions } from "@Store/types/bookmarks";

const initialState: IBookmarks = {
  posts: []
};

export default function reducer(state = initialState, action: BookmarksActions): IBookmarks {
  switch (action.type) {
    case BOOKMARKS.ADD:
      return {
        ...state,
        posts: [...state.posts, action.payload]
      };
    case BOOKMARKS.REMOVE:
      return {
        ...state,
        posts: state.posts.filter(post => post.id !== action.payload.id)
      };
    default:
      return state;
  }
}
