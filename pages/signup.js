import React, { Component } from 'react'
import React, {useState, useEffect, useRef} from 'react'
import { Form, Button, Message, Segment, TextArea, Divider } from 'semantic-ui-react'
import {HeaderMessage, FooterMessage} from '../components/Common/WelcomeMessage'


function Signup() {

  const [user, setUser] = useState({
    // name: ""
  })

    return (
        <>
        <HeaderMessage />
        
        <FooterMessage />
      </>
    )
}

export default Signup

