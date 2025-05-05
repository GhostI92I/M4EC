'use client'

import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import { validateLoginForm } from '@/lib/validate'
import { login } from '@/utils/auth.helper'
import { useAuth } from '@/app/context/AuthContext'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

const LoginComponent = () => {
    const { setUserData } = useAuth()
    const router = useRouter()

    return (
        <div className="max-w-sm mx-auto p-8 m-10 bg-white rounded-2xl shadow-2xl space-y-6">
            <h1 className="text-center text-3xl font-bold text-blue-950">Welcome to MoraShop</h1>

            <Formik
                initialValues={{ email: '', password: '' }}
                validate={validateLoginForm}
                onSubmit={async (values) => {
                    const response = await login(values)
                    const { token, user } = response
                    setUserData({ token, user })
                    router.push("/")
                }}
            >
                {({ isSubmitting, errors }) => (
                    <Form className="space-y-4">
                        <div className="flex flex-col space-y-1">
                            <label className="text-blue-950 font-medium">E-mail:</label>
                            <Field
                                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                type="email"
                                name="email"
                            />
                            <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
                        </div>

                        <div className="flex flex-col space-y-1">
                            <label className="text-blue-950 font-medium">Password:</label>
                            <Field
                                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                type="password"
                                name="password"
                            />
                            <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting || errors.email || errors.password ? true : false}
                            className="w-full bg-blue-800 text-white py-2 rounded-xl shadow-md hover:bg-blue-900 transition disabled:opacity-50"
                        >
                            Login
                        </button>

                        <p className='text-sm'>Not registered yet?</p>
                        <Link href={"/register"}>
                            <button className="w-full bg-blue-800 text-white py-2 rounded-xl shadow-md hover:bg-blue-900 transition">
                                Register
                            </button>
                        </Link>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default LoginComponent
