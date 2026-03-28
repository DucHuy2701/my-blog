import { getAllPosts } from "../utils/getPosts";
import { Link } from "react-router-dom";
import { useState } from "react";
import PageWrapper from "../components/common/PageWrapper";

export default function Blog() {
  const posts = getAllPosts();

  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState(null);

  // 🔥 Lấy tất cả tags unique
  const allTags = [...new Set(posts.flatMap((p) => p.tags || []))];

  // 🔥 Filter theo tag
  const filteredByTag = selectedTag
    ? posts.filter((p) => p.tags?.includes(selectedTag))
    : posts;

  // 🔥 Search
  const finalPosts = filteredByTag.filter((post) =>
    post.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <PageWrapper>
      <div className="space-y-6">
        <h1 className="text-2xl font-bold">Blog</h1>

        {/* 🔍 SEARCH */}
        <input
          type="text"
          placeholder="Search..."
          className="border px-3 py-2 rounded w-full"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        {/* 🏷️ TAG FILTER */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedTag(null)}
            className={`px-3 py-1 rounded text-sm
          ${
            selectedTag === null
              ? "bg-primary text-white"
              : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200"
          }`}
          >
            All
          </button>

          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1 rounded text-sm transition
            ${
              selectedTag === tag
                ? "bg-primary text-white"
                : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200"
            }`}
            >
              #{tag}
            </button>
          ))}
        </div>

        {/* 📄 POST LIST */}
        {finalPosts.map((post) => (
          <Link
            key={post.slug}
            to={`/blog/${post.slug}`}
            className="block border p-4 rounded-lg hover:border-primary"
          >
            <h2 className="text-lg font-semibold">{post.title}</h2>
            <p className="text-sm text-gray-500">{post.date}</p>
            <p className="text-gray-600 mt-2">{post.description}</p>

            {/* 🏷️ TAG UI */}
            <div className="flex gap-2 mt-2">
              {post.tags?.map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </PageWrapper>
  );
}
