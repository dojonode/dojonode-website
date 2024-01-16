import adapter from '@sveltejs/adapter-static';

const dev = "production" === "development";

export default {
	kit: {
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			pages: 'build',
			assets: 'build',
      paths: {
        // change below to your repo name
        base: dev ? "" : "/dojonode-website",
      },
			fallback: undefined,
			precompress: false,
			strict: false
		})
	}
};
