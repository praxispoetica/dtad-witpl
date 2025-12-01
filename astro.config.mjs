// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';
import starlightBlog from 'starlight-blog';
import starlightSidebarTopics from 'starlight-sidebar-topics'

// https://astro.build/config
export default defineConfig({
	site: 'https://vokapelman.com',
	integrations: [
		starlight({
			title: 'v. o. kapelman',
			  favicon: 'favicon.ico',
			  head: [
    			// Add ICO favicon fallback for Safari.
    			{
			        tag: 'link',
  				    attrs: {
        				rel: 'icon',
        				href: 'favicon.ico',
        				sizes: '32x32',
    		  			type: 'image/x-icon',
					},
    			},
  			  ],
			logo: {
        		src: './src/assets/vk-180x180.jpg',
      		},
			tableOfContents: {
				minHeadingLevel: 2,
				maxHeadingLevel: 6
			},
			plugins: [
		        starlightSidebarTopics([
					{
						label: 'About v. o. kapelman',
						link: '/about',
						icon: 'pen',
						items: ['about'],
					},
					{
						label: 'PraxisPoetica process notes',
						link: '/notes',
						icon: 'pencil',
						items: ['notes/note-20251119'],
					},
     				{
            			label: 'Works',
						link: '/works/works',
						icon: 'open-book',
						items: [
							{ label: 'Read on!', items: ['works/works']},
							{ label: 'Poetry', autogenerate: { directory: 'works/poetry' }, collapsed: true },
							{ label: 'Flash Fiction', autogenerate: { directory: 'works/flash-fiction' }, collapsed: true },
							{ label: 'Short Stories', autogenerate: { directory: 'works/short-stories' }, collapsed: true },
							// { label: 'Novels', autogenerate: { directory: 'works/novels' }},
							{ label: 'Novels', items: [
								'works/novels/novels', 
								{ 
									label: "Series: Denying The Amerikan Dream", 
									items: [
										'works/novels/dtad-witpl/dtad-witpl', 
										'works/novels/dtad-witpl/part-1',
										'works/novels/dtad-witpl/part-2',
										'works/novels/dtad-witpl/part-3',
										'works/novels/dtad-witpl/part-4',
										'works/novels/dtad-witpl/part-5',
										'works/novels/dtad-witpl/part-6',
										'works/novels/dtad-witpl/part-7',
									],
									collapsed: true
								},
							]},
						],
          			},
        		],
				{
					exclude: ['/notes', '/notes/**/*', '/works/short-stories', '/works/short-stories/**/*', '/works/flash-fiction', '/works/flash-fiction/**/*', '/works/poetry', '/works/poetry/**/*', '/works/novels', '/works/novels/**/*'], 
				}
				),
				starlightBlog({
					prefix: 'notes',
					title: 'PraxisPoetica process notes',
					authors: {
						vokapelman: {
							name: 'v. o. kapelman',
							title: 'Author of `Denying The Amerikan Dream. Wandering into the Promised Land`',
							url: 'https://vokapelman.com',
							picture: './src/assets/vk-180x180.jpg',
						},
					},
					metrics: {
                		readingTime: true,
                		words: 'rounded',
            		},
					recentPostCount: 10,
              		postCount: 15,
				}),
      		],
			components: {
				Footer: './src/components/ThinFooter.astro',
	  		},
			description: 'v. o. kapelman personal website and blog',
			social: [
				{icon: 'github', label: 'GitHub', href: 'https://github.com/praxispoetica/dtad-witpl' },
				{icon: 'blueSky', label: 'Bluesky', href: 'https://bsky.app/profile/vokapelman.bsky.social'},
				{icon: 'substack', label: 'Substack', href: 'https://vokapelman.substack.com'},
				{icon: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/victorkane' },
			],
			customCss: ['./src/styles/global.css'],
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
	markdown: {
		shikiConfig: {
    		wrap: true,              // Avoid horizontal scrolling with word wrapping.
    	},
	},	
});
