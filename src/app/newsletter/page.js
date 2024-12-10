'use client'
import React, { useState } from 'react'
import { supabase } from '../../lib/supabaseClient'
import Drawer from '@/components/Drawer'

export default function Newsletter () {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const validateEmail = email => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleSubmit = async () => {
    // Reset messages before validation
    setError('')
    setMessage('')

    if (!email) {
      setError('Email field is required.')
      return
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email address.')
      return
    }

    if (isSubmitting) {
      setError('Please wait a few seconds before trying again.')
      return
    }

    setIsSubmitting(true)

    try {
      const { data, error } = await supabase
        .from('subscribers')
        .insert([{ email }])

      if (error) {
        // Check for unique constraint violation
        if (error.code === '23505') {
          setError('You have already subscribed to the list!')
        } else {
          setError('Something went wrong. Please try again.')
        }
      } else {
        setMessage(
          'Thank you for subscribing! We will keep you posted once we are live!'
        )
        setEmail('') // Reset the email field
      }
    } catch (err) {
      console.error(err)
      setError('Unexpected error occurred.')
    } finally {
      // Re-enable submissions after 5 seconds
      setTimeout(() => {
        setIsSubmitting(false)
      }, 5000)
    }
  }

  return (
    <>
      <Drawer />
      <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-pink-300 to-indigo-800 px-4 sm:px-6 lg:px-8'>
        <div className='bg-white shadow-lg rounded-lg p-6 sm:p-8 text-center max-w-sm sm:max-w-md lg:max-w-lg w-full'>
          <h1 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4'>
            Join The List Newsletter
          </h1>
          <p className='text-gray-600 text-sm sm:text-base lg:text-lg mb-6'>
            The List is a platform designed to help you discover, support, and
            hire exceptional individuals.
            <br />
            <br />
            We share the story of every new person that joins us.
          </p>
          <div className='flex flex-col gap-4'>
            <input
              type='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder='Enter your email'
              className={`border rounded-lg px-4 py-2 sm:py-3 focus:ring-2 focus:outline-none ${
                error
                  ? 'border-red-500 focus:ring-red-500'
                  : 'border-gray-300 focus:ring-blue-500'
              }`}
            />
            <button
              onClick={handleSubmit}
              className={`bg-blue-600 text-white font-semibold py-2 sm:py-3 px-4 rounded-lg hover:bg-blue-700 transition duration-300 ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              disabled={isSubmitting}
            >
              Submit
            </button>
            {error && (
              <p className='text-sm sm:text-base text-red-500 mt-2'>{error}</p>
            )}
            {message && (
              <p className='text-sm sm:text-base text-gray-700 mt-2'>
                {message}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
