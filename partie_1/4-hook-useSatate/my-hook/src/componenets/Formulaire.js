import React, { useState } from 'react';

const Formulaire = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {

    console.log(e);
    
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (user.name.trim() && user.password.trim()) {
      setMessage(`Bienvenue ${user.name}`);
       setUser({
      name: '',
      email: '',
      password: ''
    });

    } else {
      setMessage('Champs vides');
    }
  };

  return (
    <div>
      <form className='form' onSubmit={handleSubmit}>
        <h4>Formulaire d'inscription</h4>

        <div className='form-row'>
          <label htmlFor='name' className='form-label'>
            Name
          </label>
          <input
            type='text'
            className='form-input'
            id='name'
            name='name'
            value={user.name}
            onChange={handleChange}
          />
        </div>

        <div className='form-row'>
          <label htmlFor='email' className='form-label'>
            Email
          </label>
          <input
            type='email'
            className='form-input'
            id='email'
            name='email'
            value={user.email}
            onChange={handleChange}
          />
        </div>

        <div className='form-row'>
          <label htmlFor='password' className='form-label'>
            Password
          </label>
          <input
            type='password'
            className='form-input'
            id='password'
            name='password'
            value={user.password}
            onChange={handleChange}
          />
        </div>

        <button type='submit' className='btn btn-block'>
          Submit
        </button>
      </form>
      <h1>{message}</h1>
    </div>
  );
};

export default Formulaire;
