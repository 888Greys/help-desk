import { useState } from 'react'
import axios from 'axios'
import { validateFormData, sanitizeFormData } from '../utils/validation'

const TicketForm = ({ onBack }) => {
  const [formData, setFormData] = useState({
    email: '',
    title: '',
    description: '',
    category: '',
    priority: '',
    floor: '',
    office: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage('')

    // Step 1: Sanitize and validate input
    const sanitizedData = sanitizeFormData(formData)
    const validation = validateFormData(sanitizedData)

    if (!validation.isValid) {
      setSubmitMessage('Validation Error: ${validation.errors.join(', ')}')
      setIsSubmitting(false)
      return
    }

    try {
      // Step 2: Submit the sanitized data
      const response = await axios.post(
        'https://deamon888.app.n8n.cloud/webhook/create-ticket',
        sanitizedData
      )

      setSubmitMessage('Ticket submitted successfully!')
      setFormData({
        email: '',
        title: '',
        description: '',
        category: '',
        priority: '',
        floor: '',
        office: ''
      })
    } catch (error) {
      if (error.response?.data?.message) {
        setSubmitMessage(Error: ${error.response.data.message})
      } else if (error.message.includes('constraint')) {
        setSubmitMessage(
          'Database constraint error. Please check that all values are valid.'
        )
      } else {
        setSubmitMessage('Error submitting ticket. Please try again.')
      }
      console.error('Submission error:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  // ... rest of the JSX (UI code for form, inputs, layout, etc.) remains unchanged ...
  // 🟢 YOU DO NOT NEED TO EDIT ANY JSX BELOW UNLESS YOU WANT TO MAKE VISUAL CHANGES
  // Just make sure to place the full JSX structure after the logic above as it was
}


  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-32 w-80 h-80 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-32 w-80 h-80 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
      </div>

      <div className="relative py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8 mb-8">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBack}
                className="flex items-center justify-center w-12 h-12 bg-gray-100 hover:bg-gray-200 rounded-2xl transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-blue-500/25 group"
              >
                <svg className="w-5 h-5 text-gray-600 group-hover:text-gray-800 group-hover:-translate-x-0.5 transition-all duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="flex-1">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-blue-900 bg-clip-text text-transparent">
                  Create Support Ticket
                </h1>
                <p className="mt-2 text-gray-600 font-medium">
                  Provide detailed information to help us assist you better
                </p>
              </div>
              <div className="hidden sm:block">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 p-8">

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Personal Information Section */}
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Contact Information</span>
              </h3>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                Email Address *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                  placeholder="your.email@company.com"
                />
              </div>
            </div>

            {/* Location Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="floor" className="block text-sm font-semibold text-gray-700">
                  Floor *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="floor"
                    name="floor"
                    value={formData.floor}
                    onChange={handleChange}
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="e.g., 3rd Floor"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="office" className="block text-sm font-semibold text-gray-700">
                  Office/Room *
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    id="office"
                    name="office"
                    value={formData.office}
                    onChange={handleChange}
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                    placeholder="e.g., Room 301A"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Issue Details Section */}
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <span>Issue Details</span>
              </h3>
            </div>

            {/* Title Field */}
            <div className="space-y-2">
              <label htmlFor="title" className="block text-sm font-semibold text-gray-700">
                Issue Title *
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                className="block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
                placeholder="Brief summary of the issue"
              />
            </div>

            {/* Description Field */}
            <div className="space-y-2">
              <label htmlFor="description" className="block text-sm font-semibold text-gray-700">
                Detailed Description *
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={5}
                className="block w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 resize-none"
                placeholder="Please provide detailed information about the issue, including any error messages, steps to reproduce, and when the problem started..."
              />
            </div>
          </div>

          {/* Classification Section */}
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center space-x-2">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
                <span>Issue Classification</span>
              </h3>
            </div>

            {/* Category Field */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-gray-700">
                Category *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <label className={`relative flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                  formData.category === 'Hardware' 
                    ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-500 ring-opacity-20' 
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}>
                  <input
                    id="hardware"
                    name="category"
                    type="radio"
                    value="Hardware"
                    checked={formData.category === 'Hardware'}
                    onChange={handleChange}
                    required
                    className="sr-only"
                  />
                  <div className="flex items-center space-x-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      formData.category === 'Hardware' ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
                    }`}>
                      {formData.category === 'Hardware' && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <span className="text-sm font-medium text-gray-700">Hardware</span>
                    </div>
                  </div>
                </label>

                <label className={`relative flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                  formData.category === 'Software' 
                    ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-500 ring-opacity-20' 
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}>
                  <input
                    id="software"
                    name="category"
                    type="radio"
                    value="Software"
                    checked={formData.category === 'Software'}
                    onChange={handleChange}
                    required
                    className="sr-only"
                  />
                  <div className="flex items-center space-x-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      formData.category === 'Software' ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
                    }`}>
                      {formData.category === 'Software' && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      <span className="text-sm font-medium text-gray-700">Software</span>
                    </div>
                  </div>
                </label>

                <label className={`relative flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                  formData.category === 'Networking' 
                    ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-500 ring-opacity-20' 
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}>
                  <input
                    id="networking"
                    name="category"
                    type="radio"
                    value="Networking"
                    checked={formData.category === 'Networking'}
                    onChange={handleChange}
                    required
                    className="sr-only"
                  />
                  <div className="flex items-center space-x-3">
                    <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                      formData.category === 'Networking' ? 'border-blue-500 bg-blue-500' : 'border-gray-300'
                    }`}>
                      {formData.category === 'Networking' && (
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      )}
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0" />
                      </svg>
                      <span className="text-sm font-medium text-gray-700">Networking</span>
                    </div>
                  </div>
                </label>
              </div>
            </div>

            {/* Priority Field */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-gray-700">
                Priority Level *
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                <label className={`relative flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                  formData.priority === 'Very Urgent' 
                    ? 'border-red-600 bg-red-50 ring-2 ring-red-600 ring-opacity-20' 
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}>
                  <input
                    id="very-urgent"
                    name="priority"
                    type="radio"
                    value="Very Urgent"
                    checked={formData.priority === 'Very Urgent'}
                    onChange={handleChange}
                    required
                    className="sr-only"
                  />
                  <div className="flex flex-col items-center space-y-2 w-full">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      formData.priority === 'Very Urgent' ? 'border-red-600 bg-red-600' : 'border-gray-300'
                    }`}>
                      {formData.priority === 'Very Urgent' && (
                        <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                      )}
                    </div>
                    <div className="text-center">
                      <div className="text-xs font-semibold text-red-700">VERY URGENT</div>
                      <div className="text-xs text-gray-500">Critical issue</div>
                    </div>
                  </div>
                </label>

                <label className={`relative flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                  formData.priority === 'Urgent' 
                    ? 'border-orange-500 bg-orange-50 ring-2 ring-orange-500 ring-opacity-20' 
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}>
                  <input
                    id="urgent"
                    name="priority"
                    type="radio"
                    value="Urgent"
                    checked={formData.priority === 'Urgent'}
                    onChange={handleChange}
                    required
                    className="sr-only"
                  />
                  <div className="flex flex-col items-center space-y-2 w-full">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      formData.priority === 'Urgent' ? 'border-orange-500 bg-orange-500' : 'border-gray-300'
                    }`}>
                      {formData.priority === 'Urgent' && (
                        <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                      )}
                    </div>
                    <div className="text-center">
                      <div className="text-xs font-semibold text-orange-600">URGENT</div>
                      <div className="text-xs text-gray-500">Needs attention</div>
                    </div>
                  </div>
                </label>

                <label className={`relative flex items-center p-4 border-2 rounded-xl cursor-pointer transition-all duration-200 ${
                  formData.priority === 'Low' 
                    ? 'border-green-500 bg-green-50 ring-2 ring-green-500 ring-opacity-20' 
                    : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                }`}>
                  <input
                    id="low"
                    name="priority"
                    type="radio"
                    value="Low"
                    checked={formData.priority === 'Low'}
                    onChange={handleChange}
                    required
                    className="sr-only"
                  />
                  <div className="flex flex-col items-center space-y-2 w-full">
                    <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                      formData.priority === 'Low' ? 'border-green-500 bg-green-500' : 'border-gray-300'
                    }`}>
                      {formData.priority === 'Low' && (
                        <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                      )}
                    </div>
                    <div className="text-center">
                      <div className="text-xs font-semibold text-green-600">LOW</div>
                      <div className="text-xs text-gray-500">When possible</div>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Submit Section */}
          <div className="border-t border-gray-200 pt-8 space-y-6">
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                <p>All fields marked with * are required</p>
              </div>
              <div className="text-sm text-gray-500">
                <p>Estimated response: 2-4 hours</p>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 px-8 rounded-2xl transition-all duration-300 ease-in-out transform hover:scale-[1.02] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-500/25 focus:ring-offset-2 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none group"
            >
              <span className="flex items-center justify-center space-x-3">
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Submitting Ticket...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                    <span>Submit Support Ticket</span>
                  </>
                )}
              </span>
            </button>

            {/* Submit Message */}
            {submitMessage && (
              <div className={`p-4 rounded-2xl border-2 ${
                submitMessage.includes('successfully') 
                  ? 'bg-green-50 border-green-200 text-green-800' 
                  : 'bg-red-50 border-red-200 text-red-800'
              }`}>
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    {submitMessage.includes('successfully') ? (
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
                      </svg>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold">
                      {submitMessage.includes('successfully') ? 'Success!' : 'Error'}
                    </p>
                    <p className="text-sm mt-1">{submitMessage}</p>
                    {submitMessage.includes('successfully') && (
                      <p className="text-sm mt-2 text-green-700">
                        You will receive a confirmation email shortly with your ticket number.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </form>
          </div>
        </div>
      </div>
    </div>
  )

export default TicketForm