import App from "./bin/app";
import ViteExpress from "vite-express";

ViteExpress.config({
  inlineViteConfig: {
    build: {
      outDir: "client"
    }
  }
})
ViteExpress.listen(App, parseInt(process.env.PORT || "3000"), () => {
  console.log(`running on :${process.env.PORT || 3000}`);
});
