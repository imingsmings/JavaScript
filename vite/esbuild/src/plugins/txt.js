import path from "path";
import fs from "fs";

const txtPlugin = {
    name: "txt-plugin",
    setup(build) {
        // 检测并修改构建配置(Accessing build options)
        const options = build.initialOptions
        options.outdir = 'lib'
        options.sourcemap = options.sourcemap || true

        build.onStart(() => {
            // 此处修改构建配置无效,因为构建已经开始
            // build.initialOptions.outdir = 'lib'
            console.log('esbuild start');
        })
        //  每个模块中的导入路径上运行, 解析文件格式
        build.onResolve({ filter: /\.txt$/ }, (args) => {
            console.log(args);
            return {
                path: path.resolve(args.resolveDir, args.path),
                namespace: "txt",
            };
        });

        // 对特定的文件做特定的处理
        // build.onLoad({ filter: /\.txt$/ }, async (args) => {
        build.onLoad({ filter: /.*/, namespace: "txt" }, async (args) => {
            console.log(args);
            const content = await fs.promises.readFile(args.path, "utf8");
            return {
                contents: JSON.stringify(content.split(/\s+/)),
                // contents: JSON.stringify(process.txt),
                loader: "json",
            };
        });

        build.onEnd((result) => {
            console.log(result)
            console.log('esbuild end');
        })
    },
};

export default txtPlugin
