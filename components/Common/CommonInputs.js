import React from 'react'
import { Form, Button, Message, Segment, TextArea, Divider } from 'semantic-ui-react'


function CommonInputs({
  user: { bio, facebook, instgram, youtube, twitter },
  handleChange, showSocialLinks, setShowSocialLinks
}) {
  return (
    <>
      <Form.Field
        required
        control={TextArea}
        name="bio"
        value={bio}
        onChange={handleChange}
        placeholder="bio"
      />

      <Button
        content="Add social links"
        color="red"
        icon="at"
        type="button"
        onClick{ () => setShowSocialLinks(!showSocialLinks)}

    </>
  )
}

export default CommonInputs
