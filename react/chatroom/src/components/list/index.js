import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import useWebSocket from '../../hooks/useWebSocket';
import useNav from '../../hooks/useNavigate';

const List = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');
  const username = localStorage.getItem('username');
  const navigate = useNav();
  const socket = useWebSocket();

  useEffect(() => {
    !username && navigate('/login', { replace: false });
  }, []);

  socket.addEventListener('message', function (event) {
    const message = JSON.parse(event.data);
    setMessages([...messages, message]);
  });

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onClick = (e) => {
    if (!text) return;
    const message = {
      id: nanoid(),
      userName: username,
      message: text,
    };
    socket.send(JSON.stringify(message));
    setText('');
  };

  return (
    <div className="list">
      <ul className="message-list">
        {messages.map((item) => {
          return (
            <li key={item.id}>
              <span>{item.userName}</span> :{item.message}
            </li>
          );
        })}
      </ul>
      <div className="input-box">
        <input type="text" value={text} onChange={onChange} />
        <button onClick={onClick}>发送</button>
      </div>
    </div>
  );
};

export default List;
