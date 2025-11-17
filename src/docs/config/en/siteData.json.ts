import type { DocsSiteData } from "../types/configDataTypes";

const docsSiteData: DocsSiteData = {
	title: "v. o. kapelman - writings",
	description:
		"poetry, flash fiction, short stories, novels and other writings by v. o. kapelman",
	navSocials: [
		{
			social: "X formerly known as Twitter",
			link: "https://x.com/victorkane",
			icon: "tabler/brand-x",
		},
		{
			social: "BlueSky",
			link: "https://bsky.app/profile/vokapelman.bsky.social",
			icon: "tabler/brand-bluesky",
		},
		{
			social: "GitHub",
			link: "https://github.com/practicepoetica",
			icon: "mdi/github",
		},
	],
	footerSocials: [
		{
			social: "X formerly known as Twitter",
			link: "https://x.com/victorkane",
			icon: "tabler/brand-x",
		},
		{
			social: "Threads",
			link: "https://www.threads.com/@victorkane__",
			icon: "tabler/brand-threads",
		},
		{
			social: "BlueSky",
			link: "https://bsky.app/profile/vokapelman.bsky.social",
			icon: "tabler/brand-bluesky",
		},
		{
			social: "GitHub",
			link: "https://github.com/victorkane",
			icon: "tabler/brand-github",
		},
	],
	// default image for meta tags if the page doesn't have an image already
	defaultImage: {
		src: "/images/vokapelman-20251026-79.jpeg",
		alt: "v. o. kapelman",
	},
	// Your information for SEO purposes
	author: {
		name: "v. o. kapelman",
		email: "victork_ar@yahoo.com",
		twitter: "PraxisPoetica",
	},
};

export default docsSiteData;