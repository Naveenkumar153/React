import { useState } from 'react';
import { Button,TextButton } from './UI/Button';
import Input from "./UI/Input";

export default function AuthInputs() {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [submitted, setSubmitted] = useState(false);

  function handleInputChange(identifier, value) {
    if (identifier === 'email') {
      setEnteredEmail(value);
    } else {
      setEnteredPassword(value);
    }
  }

  function handleLogin() {
    setSubmitted(true);
  }

  const emailNotValid = submitted && !enteredEmail.includes('@');
  const passwordNotValid = submitted && enteredPassword.trim().length < 6;

  return (
    <div id="auth-inputs">
      <div className="controls">
          <Input
            label="Email"
            type="email"
            onChange={(event) => handleInputChange('email', event.target.value)}
            invalid={emailNotValid}
          />
          <Input
            label="Password"
            type="password"
            invalid={passwordNotValid}
            onChange={(event) =>
              handleInputChange('password', event.target.value)
            }
          />
      </div>
      <div className="actions">
        <TextButton type="button" >
          Create a new account
        </TextButton>
        <Button onClick={handleLogin}>Sign In</Button>
      </div>
    </div>
  );
}
