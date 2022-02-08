import AllPosts from "../../components/posts/all-posts";

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

function AllPostPage() {
  return <AllPosts posts={DUMMY_POSTS} />;
}

export default AllPostPage;
