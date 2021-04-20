import Fuse from "fuse.js";

export default function fuzzySearch(query, options, grouped) {
	const fuse = new Fuse(options, {
		includeMatches: true,
		keys: grouped ? ["label", "options.name"] : ["name"],
		threshold: 0.3,
	});
	console.log(fuse.search(query));
	return fuse.search(query);
}
