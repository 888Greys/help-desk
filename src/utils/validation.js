// Form validation utilities to prevent database constraint errors

// Define allowed values that match your database constraints
export const ALLOWED_VALUES = {
  categories: ['Hardware', 'Software', 'Networking'],
  priorities: ['Very Urgent', 'Urgent', 'Low'],
  // Add other constrained fields as needed
}

// Validation functions
export const validateFormData = (formData) => {
  const errors = []

  // Validate category
  if (!ALLOWED_VALUES.categories.includes(formData.category)) {
    errors.push(`Invalid category: ${formData.category}. Allowed values: ${ALLOWED_VALUES.categories.join(', ')}`)
  }

  // Validate priority
  if (!ALLOWED_VALUES.priorities.includes(formData.priority)) {
    errors.push(`Invalid priority: ${formData.priority}. Allowed values: ${ALLOWED_VALUES.priorities.join(', ')}`)
  }

  // Validate required fields
  const requiredFields = ['email', 'title', 'description', 'category', 'priority', 'floor', 'office']
  requiredFields.forEach(field => {
    if (!formData[field] || formData[field].trim() === '') {
      errors.push(`${field} is required`)
    }
  })

  // Validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (formData.email && !emailRegex.test(formData.email)) {
    errors.push('Invalid email format')
  }

  return {
    isValid: errors.length === 0,
    errors
  }
}

// Helper function to sanitize form data before submission
export const sanitizeFormData = (formData) => {
  return {
    ...formData,
    // Trim whitespace from all string fields
    email: formData.email?.trim(),
    title: formData.title?.trim(),
    description: formData.description?.trim(),
    category: formData.category?.trim(),
    priority: formData.priority?.trim(),
    floor: formData.floor?.trim(),
    office: formData.office?.trim(),
  }
}