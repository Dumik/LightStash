import { defineConfig } from 'vite';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: './index.html', 
                auth: './pages/Auth/Auth.html'  
            },
        },
        outDir: 'dist', 
        emptyOutDir: true, 
        manifest: true,
    },
});
