import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    watch: {
      // server 폴더 아래에 있는 모든 파일들을 감지하지 않음
      // server 폴더 아래에 있는 파일들에 어떠한 변화가 있어도 리렌더링을 하는 불필요한 동작을 하지 않음
      ignored: ["**/server/**"],
    },
  },
});
