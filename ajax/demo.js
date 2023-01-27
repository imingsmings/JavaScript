// console.log($);
// method url async
$.ajax({
  type: 'get',
  url: '/test/data.json',
  async: true,
  timeout: 100,
  success: function (data) {
    console.log(data);
  },
  error: function () {
    console.log('出错了');
  },
  complete: function () {
    console.log('Request is over');
  },
});

// $.get('http://127.0.0.1:3000/get', function (data) {
//   console.log(data);
// });

// $.post(
//   'http://127.0.0.1:3000/post',
//   {
//     a: 1,
//     b: 2,
//   },
//   function (data) {
//     console.log(data);
//   }
// );
