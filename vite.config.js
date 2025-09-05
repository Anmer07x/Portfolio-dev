import { defineConfig } from "vite"; 
import react from "@vitejs/plugin-react"; 
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/ 
export default defineConfig({   
    base: "./",  // 👈 necesario para que Netlify cargue bien los assets
    plugins: [react()],   
    css: {
        postcss: {
            plugins: [tailwindcss()],
        },   
    }, 
    resolve: {
        alias: {
            "@": "/src",
        },
    },
});
