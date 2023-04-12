### HTTP协议
- 无状态
  - 对于客户端与服务端的交互没有状态记录
- 无连接
  - 应用层上请求响应交互完成后，断开连接
- 单向性
  - 只能由客户端发起请求，服务端才能响应请求

### 需求
1. 服务端有一个状态连续发生变化。
2. 客户端在服务端的这个状态发生变化时，得知这个状态值。

### HTTP方案
- 异步轮询向服务端发起请求，等待服务端响应状态值返回到客户端。
- 缺点
  - 效率低
  - 即时性不高
  - 准确性不高
  - 加大了HTTP请求的次数
  - 消耗HTTP请求资源

### WebSocket
- 基于TCP的网络协议
- 实现双工通信-数据双向传输
- 允许服务器主动向客户端通信
- 一次握手，建立持久性连接
- 代替轮询服务器方案获得响应
- 特点
  - 没有同源限制

### WebSocket建立连接
- WebSocket的连接是建立在HTTP基础上的
  1. 客户端: HTTP Request Handshake
  2. 服务端: HTTP Response - Switching Protocols
  3. 客户端: Send msg
  4. 服务端: Send msg
  5. ...
- 建立WebSocket连接
  - 请求URL: ws://127.0.0.1:8000 (HTTP请求)
  - 请求方法: GET
  - 响应状态码: 101
  - 响应状态: Switching Protocols
- 请求头
  - Connection: Upgrade (WebSocket是HTTP的一种升级)
  - Upgrade: websocket (升级为WebSocket)
  - key: Sec-WebSocket-Key (base64编码生成的客户端唯一标识, 供服务端使用)
- 响应头
  - 101 Switching Protocols (转换协议)
  - Upgrade: websocket (升级为WebSocket)
  - Connection: Upgrade
  - key: Sec-WebSocket-Accept (在请求key的基础加密生成的唯一标识)
- 整个连接过程
  1. 客户端发起HTTP请求，进行握手
    - 请求升级WebSocket
    - 传递浏览器base64生成的Sec-WebSocket-Key
  2. 服务端接受请求
    - base64(sha1(客户端Sec-WebSocket-Key))加密得到新的Sec-WebSocket-Accept
    - 响应请求，进行握手
      - 转换WebSocket协议
      - 传递Sec-WebSocket-Accept, 通过key可知是哪个客户端
  3. 完成WebSocket连接

### 心跳机制
- 一段时间没有进行通信,服务器会主动断开连接。
- 检测服务端和客户端是否建立了WebSock连接,以保持连接的关系。