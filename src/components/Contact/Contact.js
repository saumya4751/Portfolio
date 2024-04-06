import React from 'react';
import { Container, Wrapper, Title, Desc } from '../StyledComponents/StyledComponents';
import { ContactTitle, ContactInputMessage, ContactInput, ContactForm, ContactButton } from '../StyledComponents/ContactStyledComponents';
import { useForm, ValidationError } from "@formspree/react";
import { SiMinutemailer } from "react-icons/si";
import { useTheme } from 'styled-components';

const Contact = () => {
    const [state, handleSubmit] = useForm("xwkgndgj")
    const theme = useTheme();
    if (state.succeeded) {
        return (
            <Container>
                <Wrapper>
                    <Title>Contact</Title>
                    <Desc>
                        Feel free to reach out to me for any questions or opportunities!
                    </Desc>
                    <ContactForm style={{ alignItems: 'center' }}>
                        <p

                            style={{ color: `${theme.text_secondary+99}` }}
                            // style={{ color: 'black'}}
                        >
                            Thank you for reaching out! Your Message has been received. I'll get back to you shortly.
                        </p>
                    </ContactForm>
                </Wrapper>
            </Container>
        )
    }

    return (
        <Container id="contact">
            <Wrapper>
                <Title>Contact</Title>
                <Desc>
                    Feel free to reach out to me for any questions or opportunities!
                </Desc>
                <ContactForm onSubmit={handleSubmit}>
                    <ContactTitle>Email Me <SiMinutemailer /></ContactTitle>
                    <ContactInput id='email' type='email' placeholder="Your Email" name="email" required />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                    <ContactInput id='name' placeholder="Your Name" name="name" required/>
                    <ValidationError prefix="Name" field="name" errors={state.errors} />
                    <ContactInput id='subject' placeholder="Subject" name="subject" required />
                    <ValidationError prefix="Subject" field="subject" errors={state.errors} />
                    <ContactInputMessage id='message' placeholder="Message" name="message" rows={4} required />
                    <ValidationError prefix="Message" field="message" errors={state.errors} />
                    <ContactButton type="submit" value="Send" disabled={state.submitting} />
                </ContactForm>
            </Wrapper>
        </Container>
    )
}

export default Contact