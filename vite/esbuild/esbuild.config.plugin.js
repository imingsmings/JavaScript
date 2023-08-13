// const esbuild = require("esbuild");
import esbuild from "esbuild";
import txtPlugin from "./src/plugins/txt.js";
import jsPlugin from "./src/plugins/js.js";

const buildOptions = {
  entryPoints: ["src/plugin.jsx"],
  bundle: true,
  outdir: "plugins",
  plugins: [txtPlugin, jsPlugin],
};

esbuild
  .build(buildOptions)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
