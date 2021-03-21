import React, { useContext, useState } from 'react';

import { UserContext } from '../user-context';
import api from '../service/api';

export default function Contact() {
  const { themePref, lightStyle, darkStyle } = useContext(UserContext);
  const inputStyleDark = {
    backgroundColor: 'rgba(51, 50, 50, 0.5)',
    color: 'rgb(229, 229, 229)',
  };

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      if (name !== '' && email !== '' && message !== '') {
        const response = await api.post('/submit', { name, email, message });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className="contact-container"
      id="contact"
      style={themePref === 'dark' ? darkStyle : lightStyle}
    >
      <h1 className="contact__title">Get in touch</h1>
      <h3 className="contact__subtitle">Contact me!</h3>
      <form className="contact-form">
        <div className="contact-form__headers">
          <div className="input__name">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              style={themePref === 'dark' ? inputStyleDark : lightStyle}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="input__email">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              style={themePref === 'dark' ? inputStyleDark : lightStyle}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>
        <div className="contact-form__message">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            className="input__message"
            style={themePref === 'dark' ? inputStyleDark : lightStyle}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <button id="submit" onClick={submitHandler}>
          Submit
        </button>
      </form>
    </div>
  );
}
