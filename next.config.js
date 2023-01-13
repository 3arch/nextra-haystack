const withNextra = require("nextra")({
	theme: "nextra-theme-docs",
	themeConfig: "./theme.config.jsx",
})

const config = {
	experimental: {
		transpilePackages: [
			//  If needed, projects here
			//  if you get the same error :)
			// "haystack-core",
			// "haystack-nclient",
			// "haystack-react",
			// "antd",
			"@novo-int/novo-react",
		],
	},
}

module.exports = withNextra(config)

// If you have other Next.js configurations, you can pass them as the parameter:
// module.exports = withNextra({ /* other next.js config */ })
