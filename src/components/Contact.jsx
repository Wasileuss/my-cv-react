import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from 'emailjs-com';

const EmailForm = () => {
    const [statusMessage, setStatusMessage] = useState(null);

    const initialValues = {
        name: '',
        email: '',
        message: '',
    };

    const validationSchema = Yup.object({
        name: Yup.string().required('Enter your name'),
        email: Yup.string().email('Invalid email address').required('Enter your email'),
        message: Yup.string().required('Enter your message'),
    });

    const onSubmit = (values, { setSubmitting, resetForm }) => {
        const serviceId = 'service_df6bt1f';
        const templateId = 'template_eqbgntm';
        const userId = 'U0kLXolpkXV3kjKMk';

        emailjs.send(serviceId, templateId, values, userId)
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            setStatusMessage('Message sent successfully!');
            resetForm();

            setTimeout(() => {
                setStatusMessage(null);
            }, 10000);
        }, (error) => {
            console.log('FAILED...', error);
            setStatusMessage('Failed to send message. Please try again later.');

            setTimeout(() => {
                setStatusMessage(null);
            }, 10000);
        })
        .finally(() => {
            setSubmitting(false);
        });
    };

    return (
        <>
            <div className="contact">
                <div className="contact__header">
                    <h2 className="contact__title title">Contact Me</h2>
                    <div className="contact__description">
                        <p>Feedback, suggestions and new friends are always welcome.</p>
                    </div>
                </div>
                {statusMessage && <p className={`contact__message ${statusMessage.includes('successfully') ? 'success' : 'error'}`}>{statusMessage}</p>}
                <Formik
                    initialValues={initialValues}
                    validationSchema={validationSchema}
                    onSubmit={onSubmit}
                >
                    {({ isSubmitting }) => (
                        <Form className="contact__form">
                            <div className="contact__block">
                                <label htmlFor="name">Name</label>
                                <Field className="contact__input" type="text" id="name" name="name" />
                                <ErrorMessage className='contact__error' name="name" component="div" />
                            </div>
                            <div className="contact__block">
                                <label htmlFor="email">Email</label>
                                <Field className="contact__input" type="email" id="email" name="email" />
                                <ErrorMessage className='contact__error' name="email" component="div" />
                            </div>
                            <div className="contact__block">
                                <label htmlFor="message">Message</label>
                                <Field className="contact__input" as="textarea" id="message" name="message" />
                                <ErrorMessage className='contact__error' name="message" component="div" />
                            </div>
                            <button className="contact__button" type="submit" disabled={isSubmitting}>Send</button>
                        </Form>
                    )}
                </Formik>
            </div>
        </>
    );
};

export default EmailForm;
