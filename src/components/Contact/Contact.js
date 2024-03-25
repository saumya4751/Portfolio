import React from 'react';
import { Container, Wrapper, Title, Desc } from '../StyledComponents/StyledComponents';
import { ContactTitle, ContactInputMessage, ContactInput, ContactForm, ContactButton } from '../StyledComponents/ContactStyledComponents';
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
    const [state, handleSubmit] = useForm("xwkgndgj")
    if (state.succeeded) {
        return (
            <Container>
                <Wrapper>
                    <Title>Contact</Title>
                    <Desc>
                        Feel free to reach out to me for any questions or opportunities!
                    </Desc>
                    <ContactForm style={{ alignItems: 'center'}}>
                        <p>Thanks for Submitting form</p>
                    </ContactForm>
                </Wrapper>
            </Container>
        )
    }

    return (
        <Container>
            <Wrapper>
                <Title>Contact</Title>
                <Desc>
                    Feel free to reach out to me for any questions or opportunities!
                </Desc>
                <ContactForm onSubmit={handleSubmit}>
                    <ContactTitle>Email Me 🚀</ContactTitle>
                    <ContactInput id='email' type='email' placeholder="Your Email" name="email" />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                    <ContactInput id='name' placeholder="Your Name" name="name" />
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                    <ContactInput id='subject' placeholder="Subject" name="subject" />
                    <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                    <ContactInputMessage id='message' placeholder="Message" name="message" rows={4} />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                    <ContactButton type="submit" value="Send" disabled={state.submitting} />
                </ContactForm>
            </Wrapper>
        </Container>
    )
}

export default Contact