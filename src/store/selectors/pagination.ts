import { Store } from "@Models/Store";

export const getCurrentPage = ({ pagination }: Store) => pagination.currentPage;

export const getPostsPerPage = ({ pagination }: Store) => pagination.postsPerPage;

export const getTotalPosts = ({ pagination }: Store) => pagination.totalPosts;
