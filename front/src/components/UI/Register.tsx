'use client'

import React from 'react'
import { validateRegisterForm } from '@/lib/validate'
import { Field, Formik, Form, ErrorMessage } from 'formik'
import { register } from '@/utils/auth.helper'
import Link from 'next/link'

const RegisterComponent = () => {
  return (
    <div className="max-w-sm mx-auto p-8 m-10 bg-white rounded-2xl shadow-xl space-y-6">
      <h1 className="text-center text-3xl font-bold text-blue-950">Register to MoraShop</h1>

      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
          confpassword: '',
          address: '',
          phone: ''
        }}
        validate={validateRegisterForm}
        onSubmit={async (values) => {
          await register(values)
        }}
      >
        {({ isSubmitting, errors }) => (
          <Form className="space-y-4">
            {/* Name */}
            <div className="flex flex-col space-y-1">
              <label className="text-blue-950 font-medium">Name:</label>
              <Field
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                name="name"
              />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Email */}
            <div className="flex flex-col space-y-1">
              <label className="text-blue-950 font-medium">E-mail:</label>
              <Field
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="email"
                name="email"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Password */}
            <div className="flex flex-col space-y-1">
              <label className="text-blue-950 font-medium">Password:</label>
              <Field
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="password"
                name="password"
              />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Confirm Password */}
            <div className="flex flex-col space-y-1">
              <label className="text-blue-950 font-medium">Confirm Password:</label>
              <Field
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="password"
                name="confpassword"
              />
              <ErrorMessage name="confpassword" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Address */}
            <div className="flex flex-col space-y-1">
              <label className="text-blue-950 font-medium">Address:</label>
              <Field
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                name="address"
              />
              <ErrorMessage name="address" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Phone */}
            <div className="flex flex-col space-y-1">
              <label className="text-blue-950 font-medium">Phone:</label>
              <Field
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="number"
                name="phone"
              />
              <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
            </div>

            <button
              type="submit"
              disabled={
                isSubmitting ||
                errors.name ||
                errors.email ||
                errors.password ||
                errors.confpassword ||
                errors.address ||
                errors.phone
                  ? true
                  : false
              }
              className="w-full bg-blue-800 text-white py-2 rounded-xl shadow-md hover:bg-blue-900 transition disabled:opacity-50"
            >
              Register
            </button>

            <p className="text-sm text-center">Already have an account?</p>
            <Link href="/login">
              <button
                type="button"
                className="w-full bg-blue-800 text-white py-2 rounded-xl shadow-md hover:bg-blue-900 transition"
              >
                Login
              </button>
            </Link>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default RegisterComponent
