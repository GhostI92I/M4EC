'use client'

import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validateLoginForm } from '@/lib/validate';
import { login } from '@/utils/auth.helper';
import { useAuth } from '@/app/context/AuthContext';
import { useRouter } from 'next/navigation';

const LoginComponent = () => {
    const { setUserData } = useAuth();
    const router = useRouter();

    return (
        <div>
            Login to MoraShop
            <Formik
                initialValues={{ email: '', password: '' }}
                validate={validateLoginForm}
                onSubmit={async (values) => {
                    const response = await login(values)
                    const {token, user} = response;
                    setUserData({token, user})
                    router.push("/");
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
