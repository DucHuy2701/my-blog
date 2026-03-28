const modules = import.meta.glob("../content/posts/*.md", {
  eager: true,
  query: "?raw",
  import: "default",
});

function parseFrontmatter(content) {
  const match = content.match(/---([\s\S]*?)---/);

  if (!match) return { data: {}, content };

  const frontmatter = match[1];
  const body = content.replace(match[0], "").trim();

  const data = {};

  frontmatter.split("\n").forEach((line) => {
    const [key, ...rest] = line.split(":");
    if (!key) return;

    const value = rest.join(":").trim();

    // 👇 THÊM LOGIC NÀY
    if (key.trim() === "tags") {
      data[key.trim()] = value.split(",").map((t) => t.trim());
    } else {
      data[key.trim()] = value;
    }
  });

  return { data, content: body };
}

export function getAllPosts() {
  return Object.entries(modules)
    .map(([path, raw]) => {
      const { data, content } = parseFrontmatter(raw);

      const slug = path.split("/").pop().replace(".md", "");

      return {
        slug,
        ...data,
        content,
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}
