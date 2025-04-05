'use client'

import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validateLoginForm } from '@/lib/validate';

const LoginComponent = () => {
    return (
        <div>
            Login to MoraShop
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={validateLoginForm}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert('Iniciando sesión, bienvenido');
                        console.log("Submit exitoso");

                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting, errors }) => (
                    <Form>
                        <label>E-mail:</label>
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" component="div" />
                        <label>Password:</label>
                        <Field type="password" name="password" />
                        <ErrorMessage name="password" component="div" />
                        <button type="submit" disabled={isSubmitting ? true : errors.email || errors.password ? true : false}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default LoginComponent
