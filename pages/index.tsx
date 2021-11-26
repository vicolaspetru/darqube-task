import { InferGetServerSidePropsType } from "next";
import HomePage from "@Views/HomePage";
import { Post } from "@Models/Post";

const IndexPage = ({ posts }: InferGetServerSidePropsType<typeof getServerSideProps>) => (
  <HomePage posts={posts} />
);

export const getServerSideProps = async () => {
  const res = await fetch(process.env.API_ENDPOINT);
  const posts: Post[] = await res.json();

  // Pass data to the page via props
  return { props: { posts } };
};

export default IndexPage;
