import React, { useState } from 'react';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Xử lý đăng nhập tại đây (gửi yêu cầu đăng nhập đến máy chủ, xác thực, vv.)
    console.log('Username:', username);
    console.log('Password:', password);
    // Đặt lại các trường đăng nhập
    setUsername('');
    setPassword('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;