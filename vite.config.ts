export default defineConfig(({ mode }) => ({
  base: '/',
  build: {
    outDir: 'dist', // ensures Vite puts files in the correct place
  },
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
