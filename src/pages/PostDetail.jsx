import { useParams } from "react-router-dom";
import { getAllPosts } from "../utils/getPosts";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import PageWrapper from "../components/common/PageWrapper";

export default function PostDetail() {
  const { slug } = useParams();
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === slug);

  const [progress, setProgress] = useState(0);
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState("");

  if (!post) return <div>Post not found</div>;

  const Content = post.component;

  // 📊 Progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      setProgress((window.scrollY / totalHeight) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 📚 Extract headings từ DOM (MDX)
  useEffect(() => {
    const elements = document.querySelectorAll("h1, h2, h3");

    const mapped = Array.from(elements).map((el) => ({
      text: el.innerText,
      id: el.id,
      level: Number(el.tagName.replace("H", "")),
    }));

    setHeadings(mapped);
  }, []);

  // 📌 Active heading
  useEffect(() => {
    const handleScroll = () => {
      let current = "";

      headings.forEach((h) => {
        const el = document.getElementById(h.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) current = h.id;
        }
      });

      setActiveId(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [headings]);

  return (
    <PageWrapper>
      <Helmet>
        <title>{post.title}</title>
        <meta name="description" content={post.description} />
      </Helmet>

      {/* Progress */}
      <div
        className="fixed top-0 left-0 h-1 bg-primary z-50"
        style={{ width: `${progress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 mt-10 grid lg:grid-cols-[1fr_260px] gap-10">
        
        {/* CONTENT */}
        <div>
          {/* TAGS */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags?.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-md
                bg-gray-100 text-gray-700
                dark:bg-gray-800 dark:text-gray-200"
              >
                #{tag}
              </span>
            ))}
          </div>

          <h1 className="text-3xl md:text-4xl font-bold mb-2">
            {post.title}
          </h1>

          <p className="text-sm text-gray-500 mb-4">{post.date}</p>

          <p className="text-gray-600 dark:text-gray-300 mb-8">
            {post.description}
          </p>

          {/* 🔥 MDX CONTENT */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <Content />
          </div>
        </div>

        {/* TOC */}
        <div className="hidden lg:block">
          <div className="sticky top-24 text-sm space-y-2">
            <p className="font-semibold mb-2">On this page</p>

            {headings.map((h, i) => (
              <div
                key={i}
                onClick={() => {
                  document
                    .getElementById(h.id)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`cursor-pointer ${
                  activeId === h.id
                    ? "text-primary font-semibold"
                    : "text-gray-500"
                }`}
                style={{ marginLeft: `${(h.level - 1) * 12}px` }}
              >
                {h.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}