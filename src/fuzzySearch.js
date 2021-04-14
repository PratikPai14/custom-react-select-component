import Fuse from "fuse.js";

export default function fuzzySearch(query, options) {
  const fuse = new Fuse(options, {
    keys: ["name"],
    threshold: 0.3,
  });

  return fuse.search(query);
}
