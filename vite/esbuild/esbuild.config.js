const esbuild = require("esbuild");
const str = 'TEST && require("package.json")';

const buildOptions = {
  // entryPoints: ["src/app.jsx", "src/index.js"],
  //   entryPoints: [
  //       "src/pages/home/index.jsx",
  //       "src/pages/about/index.jsx"
  //   ],
  // entryPoints: {
  //   out1: "src/app.jsx",
  //   out2: "src/index.js",
  //   out3: "src/test.jsx",
  // },
  entryPoints: ["src/test.jsx"],
  entryNames: "[dir]/[name]",
  outbase: "src",
  outExtension: { ".js": ".mjs" },
  // 是否输出打包文件，默认情况下不输出，需手动开启。只适用于静态导入
  bundle: true,
  // minify: true,
  // outdir: "dist",
  outdir: "www/js",
  // 不打包
  external: ["react"],
  // target: "browser",
  format: "esm",
  inject: ["src/process-shim.js"],
  loader: {
    ".png": "dataurl",
    ".css": "css",
  },
  sourcemap: true,
  splitting: true,
  // watch: {
  //   onRebuild(error, result) {
  //     if (error) console.error('watch build failed:', error)
  //     else console.log('watch build succeeded:', result)
  //   },
  // },
};

esbuild
  .transform(str, {
    // 在不更改代码本身的情况下更改生成之间某些代码的行为
    define: {
      TEST: "true",
    },
  })
  .then((result) => {
    console.log(result);
  })
  .catch(() => process.exit(1));

// esbuild
//   .build(buildOptions)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch(() => process.exit(1));

esbuild
  .serve(
    {
      servedir: "www",
      // port: 9000
    },
    buildOptions
  )
  .then((server) => {
    console.log(server);
    // server.stop()
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
