import { Fragment } from "react";
import FeaturedPosts from "../components/home-page/featured-posts";

import Hero from "../components/home-page/hero";

const DUMMY_POSTS = [
  {
    slug: "gettting-started1",
    title: "getting started",
    image: "getting-started-nextjs.png",
    excerpt: "nextjs is goed",
    date: "2022-02-10",
  },
  {
    slug: "gettting-started2",
    title: "getting started",
    image: "getting-started-nextjs.png",
    excerpt: "nextjs is goed",
    date: "2022-02-10",
  },
  {
    slug: "gettting-started3",
    title: "getting started",
    image: "getting-started-nextjs.png",
    excerpt: "nextjs is goed",
    date: "2022-02-10",
  },
  {
    slug: "gettting-started4",
    title: "getting started",
    image: "getting-started-nextjs.png",
    excerpt: "nextjs is goed",
    date: "2022-02-10",
  },
];

function HomePage() {
  return (
    <Fragment>
      <Hero />
      <FeaturedPosts posts={DUMMY_POSTS} />
    </Fragment>
  );
}

export default HomePage;
