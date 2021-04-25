import React, {useState, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

const SignUpModel = (props) => {
  const [email, setEmail] = useState('');
  const [password, setPassWord] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (email && password) {
      document.cookie = 'learnSmart';
      props.history.push('/stories');
    }
  }

  const updateEmailInput = (e) => {
    const email = e.target.value;
    const emailValidation = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailValidation.test(email.toLowerCase())) {
      setEmail(e.target.value);
    } else {
      setEmail(false);
    }
  }

  const updatePasswordInput = (e) => {
    const password = e.target.value;
    if (password.length >= 8) {
      setPassWord(password);
    } else {
      setPassWord(false);
    }
  }

  return (
    <div className={props.showModel ? "modelWrapper" : 'hide'}>
      <div className="modelContainer">
        <form className="signupForm" onSubmit={(e) => handleSubmit(e)}>
          <span className="close" onClick={() => {props.setModel(false)}}>X</span>
          <div className="headline h2">
            Sign up
          </div>
          <input className={email ? '' : 'error'} type="email" placeholder="email" onChange={(e) => updateEmailInput(e)}></input>
          <input className={password ? '' : 'error'} type="password" placeholder="password" onChange={(e) => updatePasswordInput(e)}></input>
          <input type='submit'/>
        </form>
      </div>
    </div>
  );
};

export default SignUpModel;
