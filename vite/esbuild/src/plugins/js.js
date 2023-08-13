import path from "path";
import fs from "fs";

const jsPlugin = {
    name: "js-plugin",
    setup(build) {
        // 检测并修改构建配置(Accessing build options)
        const options = build.initialOptions
        options.outdir = 'lib'
        options.sourcemap = options.sourcemap || true

        //  每个模块中的导入路径上运行, 解析文件格式
        build.onResolve({ filter: /\.js$/ }, (args) => {
            return {
                path: path.resolve(args.resolveDir, args.path),
                namespace: "js",
            };
        });

        // 对特定的文件做特定的处理
        // build.onLoad({ filter: /\.txt$/ }, async (args) => {
        build.onLoad({ filter: /.*/, namespace: "js" }, async (args) => {
            const content = await fs.promises.readFile(args.path, "utf8");
            return {
                contents: JSON.stringify(content.replace(/v\d+/,'版本号')),
                // contents: JSON.stringify(process.txt),
                loader: "js",
            };
        });
    },
};

export default jsPlugin
