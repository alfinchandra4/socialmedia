import React, { useState, useEffect, useRef } from 'react'
import { Form, Button, Message, Segment, TextArea, Divider } from 'semantic-ui-react'
import { HeaderMessage, FooterMessage } from '../components/Common/WelcomeMessage';
const regexUsername = /^(?!.*\.\.)(?!.*\.$)[^\W][\w.]{0,29}$/;


function Signup() {

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    bio: "",
    facebook: "",
    youtube: "",
    twitter: "",
    instagram: ""
  });

  const { name, email, password, bio } = user;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser(prev => ({ ...prev, [name]: value }));
  }

  const [showSocialLinks, setShowSocialLinks] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [formLoading, setFormLoading] = useState(false);

  const [username, setUsername] = useState('');
  const [usernameLoading, setUsernameLoading] = useState(false);
  const [usernameAvailable, setUsernameAvailable] = useState(false);

  const handleSubmit = e => e.preventDefault();

  return (
    <>
      <HeaderMessage />
      <Form loading={formLoading} error={errorMsg !== null} onSubmit={handleSubmit}>
        <Message error
          header="Oops!"
          content={errorMsg}
          onDismiss={() => setErrorMsg(null)}
        />

        <Segment>
          <Form.Input
            required
            label="name"
            placeholder="name"
            name="name"
            value={name}
            onChange={handleChange}
            fluid icon="user"
            iconPosition="left" />

          <Form.Input
            required
            label="email"
            placeholder="email"
            name="email"
            value={email}
            onChange={handleChange}
            fluid icon="envelope"
            iconPosition="left"
            type="email" />

          <Form.Input
            label="password"
            placeholder="password"
            name="password"
            value={password}
            onChange={handleChange}
            fluid
            icon={{
              name: "eye",
              circular: true,
              link: true,
              onClick: () => setShowPassword(!showPassword)
            }}
            iconPosition="left"
            type={showPassword ? 'text' : 'password'}
            required
          />

          <Form.Input
            loading={usernameLoading}
            error={!usernameAvailable}
            required
            label="username"
            placeholder="username"
            name="username"
            value={username}
            onChange={e => {
              setUsername(e.target.value)
              if (regexUsername.test(e.target.value)) {
                setUsernameAvailable(true); 
              } else {
                setUsernameAvailable(false);
              }
            }}
            fluid
            icon={ usernameAvailable ? "check" : "close" }
            iconPosition="left"
             />

        </Segment>
      </Form>
      <FooterMessage />
    </>
  )
}

export default Signup

