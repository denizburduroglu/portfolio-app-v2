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
				scope: "/portfolio-app-v2/",
				start_url: "/portfolio-app-v2/",
				short_name: "Vite PWA",
				description: "Vite PWA Demo",
				name: "Vite PWA",
				icons: [
					{
						src: "/icons/keyboard_icon_128x128.png",
						sizes: "128x128",
						type: "image/png",
					},
					{
						src: "/icons/keyboard_icon_512x512.png",
						sizes: "512x512",
						type: "image/png",
					},
					{
						src: "/icons/keyboard_icon_512x512.png",
						sizes: "512x512",
						type: "image/png",
						purpose: "any maskable",
					}
				],
			},
		}),
	],
	base: "/portfolio-app-v2/",
});
