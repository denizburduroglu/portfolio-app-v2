import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { VitePWA } from "vite-plugin-pwa";
// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		VitePWA({
			// add this to cache all the imports
			workbox: {
				globPatterns: ["**/*"],
			},
			// add this to cache all the
			// static assets in the public folder
			includeAssets: ["**/*"],
			manifest: {
				theme_color: "#f69435",
				background_color: "#f69435",
				display: "standalone",
				scope: "/",
				start_url: "/",
				short_name: "Vite PWA",
				description: "Vite PWA Demo",
				name: "Vite PWA",
				icons: [
					{
						src: "/public/vite.svg",
						sizes: "192x192",
						type: "image/svg+xml",
					},
					{
						src: "/public/vite.svg",
						sizes: "512x512",
						type: "image/svg+xml",
          },
          {
            src: "/public/vite.svg",
						sizes: "512x512",
						type: "image/svg+xml",
            purpose: 'any maskable'
          }
				],
			},
		}),
	],
	base: "/portfolio-app-v2/",
});
