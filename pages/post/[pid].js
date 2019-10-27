import { useRouter } from "next/router";
import Link from "next/link";
import Layout from "../../containers/Layout";

const Post = () => {
  const router = useRouter();

  return (
    <Layout>
      <p>
        {[1, 2, 3].map(pid => (
          <>
            <Link href="/post/[pid]" as={`/post/${pid}`}>
              <a>Post {pid}</a>
            </Link>
            <br />
          </>
        ))}
      </p>
    </Layout>
  );
};
export default Post;
