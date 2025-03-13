import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: `chest4.tmweb.ru`,
				port: "",
				pathname: "/**",
			},
		],
	},
	async redirects() {
		return [
			{
				source: "/admin",
				destination: `${process.env.WORDPRESS_URL}/wp-admin`,
				permanent: true,
			},
		];
	},
};

export default nextConfig;
