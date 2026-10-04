import { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import useDocumentTitle from '../hooks/useDocumentTitle';

const STATUS_TIMEOUT = 5000;

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

const Contact = () => {
    useDocumentTitle('Contact');
    const [status, setStatus] = useState(null);

    useEffect(() => {
        if (!status) return;

        const timer = setTimeout(() => setStatus(null), STATUS_TIMEOUT);
        return () => clearTimeout(timer);
    }, [status]);

    const onSubmit = async (values, { resetForm }) => {
        try {
            await emailjs.send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                values,
                { publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY },
            );
            setStatus({ type: 'success', text: 'Message sent successfully!' });
            resetForm();
        } catch (error) {
            console.error('EmailJS send failed:', error);
            setStatus({ type: 'error', text: 'Failed to send message. Please try again later.' });
        }
    };

    return (
        <div className="contact">
            <div className="contact__header">
                <h1 className="contact__title title">Contact Me</h1>
                <div className="contact__description">
                    <p>Feedback, suggestions and new friends are always welcome.</p>
                </div>
            </div>
            <div className="contact__status" role="status" aria-live="polite">
                {status && <p className={`contact__message ${status.type}`}>{status.text}</p>}
            </div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                {({ isSubmitting }) => (
                    <Form className="contact__form" noValidate>
                        <div className="contact__block">
                            <label htmlFor="name">Name</label>
                            <Field
                                className="contact__input"
                                type="text"
                                id="name"
                                name="name"
                                autoComplete="name"
                            />
                            <ErrorMessage className="contact__error" name="name" component="div" />
                        </div>
                        <div className="contact__block">
                            <label htmlFor="email">Email</label>
                            <Field
                                className="contact__input"
                                type="email"
                                id="email"
                                name="email"
                                autoComplete="email"
                            />
                            <ErrorMessage className="contact__error" name="email" component="div" />
                        </div>
                        <div className="contact__block">
                            <label htmlFor="message">Message</label>
                            <Field
                                className="contact__input"
                                as="textarea"
                                id="message"
                                name="message"
                            />
                            <ErrorMessage
                                className="contact__error"
                                name="message"
                                component="div"
                            />
                        </div>
                        <button className="contact__button" type="submit" disabled={isSubmitting}>
                            {isSubmitting ? 'Sending…' : 'Send'}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Contact;
