const modules = import.meta.glob("../content/posts/*.mdx", {
  eager: true,
});

export function getAllPosts() {
  return Object.entries(modules)
    .map(([path, mod]) => {
      const slug = path.split("/").pop().replace(".mdx", "");

      return {
        slug,
        ...mod.meta,        // 👈 meta từ MDX
        component: mod.default, // 👈 React component
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}