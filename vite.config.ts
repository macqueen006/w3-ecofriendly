import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-swc";
import {defineConfig} from "vite";
import {visualizer} from "rollup-plugin-visualizer";

export default defineConfig(({mode}) => ({
    plugins: [
        react(),
        tailwindcss(),
        mode === "analyze" && visualizer({
            open: true,
            gzipSize: true,
            brotliSize: true,
            filename: "reports/bundle-stats.html",
        }),
    ].filter(Boolean),
    server: {
        historyApiFallback: true,
    },
    resolve: {
        alias: {
            "@": path.resolve(__dirname, "./src"),
            "@ui": path.resolve(__dirname, "./src/ui"),
            "@hooks": path.resolve(__dirname, "./src/hooks"),
            "@utils": path.resolve(__dirname, "./src/utils"),
            "@services": path.resolve(__dirname, "./src/services"),
            "@features": path.resolve(__dirname, "./src/features"),
            "@constants": path.resolve(__dirname, "./src/constants"),
            "@store": path.resolve(__dirname, "./src/store"),
            "@layouts": path.resolve(__dirname, "./src/layouts"),
        },
    },

    build: {
        target: "es2015",
        minify: "terser",
        terserOptions: {
            compress: {
                drop_console: mode === "production",
                drop_debugger: true,
                pure_funcs: ["console.log", "console.debug"],
            },
        },
        cssCodeSplit: true,
        reportCompressedSize: true,
        chunkSizeWarningLimit: 500,

        rollupOptions: {
            output: {
                manualChunks(id) {
                    if (id.includes("node_modules")) {
                        if (id.includes("react") || id.includes("react-dom")) return "vendor-react";
                        if (id.includes("react-router")) return "vendor-router";
                        if (id.includes("framer-motion")) return "vendor-motion";
                        if (id.includes("@emailjs")) return "vendor-emailjs";
                        return "vendor-other";
                    }
                },
                entryFileNames: "assets/[name].[hash].js",
                chunkFileNames: "assets/[name].[hash].js",
                assetFileNames: "assets/[name].[hash].[ext]",
            },
        },
    },

    optimizeDeps: {
        include: ["react", "react-dom", "react-router", "framer-motion", "@emailjs/browser"],
    },
}));