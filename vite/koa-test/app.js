const Koa = require('koa');

const app = new Koa();

async function md1(ctx, next) {
  console.log(1);
  await next();
  console.log(2);
}

async function md2(ctx, next) {
  console.log(3);
  await next();
  console.log(4);
}

async function md3(ctx, next) {
  console.log(5);
  await next();
  console.log(6);
}

app.use(md1);
app.use(md2);
app.use(md3);

app.listen(9000, () => {
  console.log('Ok');
});
