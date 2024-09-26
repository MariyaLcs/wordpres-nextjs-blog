import Link from "next/link";

export default async function PostsPage() {
  const res = await fetch(`${process.env.WP_API_URL}/posts`);
  const data = await res.json();

  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-10">All Posts</h1>

      <ul className="space-y-8 max-w-4xl mx-auto">
        {data.map((post: any) => (
          <li key={post.id} className="border-b pb-4">
            <Link
              href={`/posts/${post.slug}`}
              className="text-2xl font-semibold text-blue-600 hover:underline transition duration-300"
            >
              {post.title.rendered}
            </Link>

            <p className="mt-2 text-gray-600">
              {post.excerpt?.rendered.replace(/(<([^>]+)>)/gi, "")}
            </p>

            <Link
              href={`/posts/${post.slug}`}
              className="mt-3 inline-block text-blue-500 hover:text-blue-700 font-medium transition duration-200"
            >
              Read more →
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
