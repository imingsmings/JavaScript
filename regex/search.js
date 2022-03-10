const originStr = '?username=ddsnfs1k232k==&password=fhglfkls/0f9ds==&ret=1';
const strs = originStr.split('?')[1].split('&');
const info = [];

strs.forEach((item, index) => {
  info.push(item.replace(/^[\w]{8}=/, ''));
});

console.log(info);
