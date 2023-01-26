// console.log($);
// method url async
// $.ajax({
//   type: 'get',
//   url: '/test/data.json',
//   async: true,
//   success: function (data) {
//     console.log(data);
//   },
//   error: function () {},
//   complete: function () {
//     console.log('Request is over');
//   },
// });

$.get('/test/data.json', function (data) {
  console.log(data);
});
