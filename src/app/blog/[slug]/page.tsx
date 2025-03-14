import { format, parseISO } from "date-fns";
import { allPosts } from "contentlayer/generated";
// import { MDXProvider } from '@mdx-js/react'

// export const generateStaticParams = async () => {
//   return Promise.resolve(allPosts.map((post) => ({ slug: post._raw.flattenedPath })))
// }

export const runtime = "edge";

export const generateMetadata = async ({ params }: { params: Params }) => {
  const { slug } = await params;

  const post = allPosts.find((post) => post._raw.flattenedPath === slug);
  if (!post) throw new Error(`Post not found for slug: ${slug}`);
  return { title: `Yt2Pod - ${post.title}`, description: post.summary };
};

type Params = Promise<{ slug: string }>;

const PostLayout = async ({ params }: { params: Params }) => {
  const { slug } = await params;
  const post = allPosts.find((post) => post._raw.flattenedPath === slug);
  if (!post) throw new Error(`Post not found for slug: ${slug}`);
  // console.log('post.body :', post.body)
  return (
    // <MDXProvider>
    <article className="prose mx-auto max-w-xl py-8 dark:prose-invert">
      <div className="mb-8 text-center">
        <time dateTime={post.date} className="mb-1 text-xs ">
          {format(parseISO(post.date), "LLLL d, yyyy")}
        </time>
        <h1 className="text-3xl font-bold">{post.title}</h1>
      </div>
      <div
        className="[&>*:last-child]:mb-0 [&>*]:mb-3"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </article>
    // </MDXProvider>
  );
};

export default PostLayout;
