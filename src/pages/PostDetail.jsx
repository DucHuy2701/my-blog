import { useParams } from "react-router-dom";
import { getAllPosts } from "../utils/getPosts";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import PageWrapper from "../components/common/PageWrapper";

function extractHeadings(content) {
  return content
    .split("\n")
    .filter((line) => line.startsWith("#"))
    .map((line) => {
      const text = line.replace(/^#+\s/, "");
      const id = text.toLowerCase().replace(/\s+/g, "-");

      return {
        text,
        id,
        level: line.match(/^#+/)[0].length,
      };
    });
}

export default function PostDetail() {
  const { slug } = useParams();
  const posts = getAllPosts();
  const post = posts.find((p) => p.slug === slug);

  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState("");

  if (!post) return <div>Post not found</div>;

  const headings = extractHeadings(post.content);

  // 📊 Reading progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      const current = window.scrollY;
      setProgress((current / totalHeight) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 📌 Active heading
  useEffect(() => {
    const handleScroll = () => {
      let current = "";

      headings.forEach((h) => {
        const el = document.getElementById(h.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            current = h.id;
          }
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

      {/* 🔥 Progress bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-primary z-50 transition-all"
        style={{ width: `${progress}%` }}
      />

      <div className="max-w-7xl mx-auto px-4 mt-10 grid lg:grid-cols-[1fr_260px] gap-10">
        {/* 📝 MAIN CONTENT */}
        <div>
          {/* 🏷️ TAGS */}
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags?.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 rounded-md
                bg-gray-100 text-gray-700
                dark:bg-gray-800 dark:text-gray-200
                border border-gray-200 dark:border-gray-700"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* 🧠 TITLE */}
          <h1 className="text-3xl md:text-4xl font-bold mb-2">{post.title}</h1>

          {/* 📅 META */}
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            {post.date}
          </p>

          <p className="text-base text-gray-600 dark:text-gray-300 mb-8">
            {post.description}
          </p>

          {/* 📚 CONTENT */}
          <div
            className="prose prose-lg max-w-none
            dark:prose-invert
            prose-headings:scroll-mt-24
          "
          >
            <ReactMarkdown
              children={post.content}
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
              components={{
                h1: ({ children }) => {
                  const id = children
                    .toString()
                    .toLowerCase()
                    .replace(/\s+/g, "-");
                  return <h1 id={id}>{children}</h1>;
                },
                h2: ({ children }) => {
                  const id = children
                    .toString()
                    .toLowerCase()
                    .replace(/\s+/g, "-");
                  return <h2 id={id}>{children}</h2>;
                },
                h3: ({ children }) => {
                  const id = children
                    .toString()
                    .toLowerCase()
                    .replace(/\s+/g, "-");
                  return <h3 id={id}>{children}</h3>;
                },
              }}
            />
          </div>
        </div>

        {/* 📚 TOC */}
        <div className="hidden lg:block">
          <div className="sticky top-24 text-sm space-y-2">
            <p className="font-semibold text-gray-700 dark:text-gray-300 mb-2">
              On this page
            </p>

            {headings.map((h, i) => (
              <div
                key={i}
                onClick={() => {
                  const el = document.getElementById(h.id);
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`cursor-pointer transition
                  ${
                    activeId === h.id
                      ? "text-primary font-semibold"
                      : "text-gray-500 dark:text-gray-400 hover:text-primary"
                  }
                `}
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
