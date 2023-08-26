const express = require('express');
const bodyParser = require('body-parser');
const { readFileSync, writeFileSync } = require('fs');
const { resolve } = require('path');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', '*');
  next();
});

app.get('/getCommentList', (req, res, next) => {
  const commentListStr = readFileSync(
    resolve(__dirname, './data/comment.json'),
    'utf8'
  );
  const commentList = JSON.parse(commentListStr);

  res.json({
    data: commentList,
    code: 0,
    msg: 'success',
  });
});

app.post('/setCommentList', (req, res, next) => {
  const comment = req.body.comment;
  const commentListStr = readFileSync(
    resolve(__dirname, './data/comment.json'),
    'utf8'
  );
  const commentList = JSON.parse(commentListStr);
  commentList.unshift(comment);
  writeFileSync(
    resolve(__dirname, './data/comment.json'),
    JSON.stringify(commentList)
  );

  res.json({
    code: 0,
    msg: 'success',
    data: comment,
  });
});

app.listen(3000, () => {
  console.log('Server is running on 3000');
});

/**
 * 评论结构: comment
 * {
 *  id: number,
 *  comment: string,
 *  pid: 评论 0, 回复 评论或回复的那一条的id
 * }
 * ===>
 * [
 *  {
 *    id: 1,
 *    uid: 1,
 *    username: 'Tom'
 *    pid: 0,
 *    comment: '你好',
 *    children: [
 *      {
 *
 *      }
 *    ]
 *  },
 *  {
 *    id: 2,
 *    uid: 2,
 *    pid: 1,
 *    comment: '你好呀'
 *  },
 *  {
 *    id: 3,
 *    uid: 1,
 *    pid: 2,
 *    comment: '幸会'
 *  }
 * ]
 *
 * comment -> 对comment这张表的操作 -> comment数据操作类型
 *
 * 用户: user
 * {
 *  id: number,
 *  username: string
 * }
 * ===>
 * [
 *  {
 *    id: 1,
 *    username: 'Tom'
 *  },
 *  {
 *    id: 2,
 *    username: 'Jack'
 *  }
 * ]
 */
