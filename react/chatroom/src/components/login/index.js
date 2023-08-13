import React, { useEffect, useState } from 'react';
import useNav from '../../hooks/useNavigate';

const Login = () => {
  const [username, setUserName] = useState('');
  const navigate = useNav();

  useEffect(() => {
    const user = localStorage.getItem('username');
    user && navigate('/list', { replace: false });
  }, []);

  const onChange = (e) => {
    setUserName(e.target.value);
  };

  const onClick = () => {
    if (!username) return;
    localStorage.setItem('username', username);
    navigate('/list', { replace: false });
  };

  return (
    <div className="login">
      <input type="text" value={username} onChange={onChange} />
      <button onClick={onClick}>进入聊天室</button>
    </div>
  );
};

export default Login;
