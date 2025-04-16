'use client'

import React from 'react'
import { validateRegisterForm } from '@/lib/validate';
import { Field, Formik, Form, ErrorMessage } from 'formik';

const RegisterComponent = () => {
  return (
    <div>
      Register to MoraShop
            <Formik
                initialValues={{ name: '', email: '', password: '', confpassword: '', address: '', phone: '' }}
                validate={validateRegisterForm}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert('Registro exitoso');
                        console.log("Submit exitoso");

                        setSubmitting(false);
                    }, 400);
                }}
            >
                {({ isSubmitting, errors }) => (
                    <Form>
                        <label>Name:</label>
                        <Field type="text" name="name" />
                        <ErrorMessage name="name" component="div" />
                        <label>E-mail:</label>
                        <Field type="email" name="email" />
                        <ErrorMessage name="email" component="div" />
                        <label>Password:</label>
                        <Field type="password" name="password" />
                        <ErrorMessage name="password" component="div" />
                        <label>Confirm Password:</label>
                        <Field type="password" name="confpassword" />
                        <ErrorMessage name="confpassword" component="div" />
                        <label>Address:</label>
                        <Field type="text" name="address" />
                        <ErrorMessage name="address" component="div" />
                        <label>Phone:</label>
                        <Field type="number" name="phone" />
                        <ErrorMessage name="phone" component="div" />
                        <button type="submit" disabled={isSubmitting ? true : errors.name || errors.email || errors.password || errors.confpassword || errors.adress || errors.phone ? true : false}>
                            Submit
                        </button>
                    </Form>
                )}
            </Formik>
    </div>
  )
}

export default RegisterComponent
