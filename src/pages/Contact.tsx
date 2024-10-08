import React, { useState } from 'react';

const Contact: React.FC = () => {
  // State for form fields
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  // State for form submission status and errors
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear the error for the field
    setErrors({ ...errors, [e.target.name]: '' });
  };

  // Validate form data
  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required.';
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = 'Invalid email address.';
    }
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required.';
    }
    return newErrors;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate form data
    const formErrors = validate();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setStatus('sending');

    // Send form data via EmailJS using the global emailjs object
    (window as any).emailjs
      .send(
        'service_in4h0p8', // Replace with your EmailJS Service ID
        'template_s52p6bm', // Replace with your EmailJS Template ID
        formData
      )
      .then(
        (response: any) => {
          console.log('SUCCESS!', response.status, response.text);
          setStatus('sent');
          // Reset form fields
          setFormData({
            name: '',
            email: '',
            message: '',
          });
        },
        (err: any) => {
          console.error('FAILED...', err);
          setStatus('error');
        }
      );
  };

  return (
    <div className="relative">
      {/* Background pattern and other content */}
      <div className="relative max-w-4xl mx-auto p-6">
        <h2 className="text-4xl font-bold mb-8 text-center text-white">Get in Touch</h2>
        <p className="text-lg mb-12 text-center text-gray-200">
          I'd love to hear from you! Whether you have a question about my services,
          want to discuss a project, or just want to say hello, feel free to reach out.
        </p>

        {/* Contact Form */}
        <div className="rounded-lg shadow-lg p-8 mb-12 text-white">
          {status === 'sent' ? (
            <div className="text-center">
              <h3 className="text-2xl font-semibold mb-4">Thank you!</h3>
              <p>
                Your message has been sent successfully. I'll get back to you soon.
              </p>
            </div>
          ) : status === 'error' ? (
            <div className="text-center text-red-400">
              <h3 className="text-2xl font-semibold mb-4">Oops!</h3>
              <p>Something went wrong. Please try again later.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Form fields with validation messages */}
              {/* Name Field */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-lg font-medium"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-4 py-2 bg-gray-800 text-white border ${
                    errors.name ? 'border-red-500' : 'border-gray-600'
                  } rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500`}
                />
                {errors.name && (
                  <p className="text-red-400 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              {/* Email Field */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-lg font-medium"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-4 py-2 bg-gray-800 text-white border ${
                    errors.email ? 'border-red-500' : 'border-gray-600'
                  } rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500`}
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email}</p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-lg font-medium"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className={`mt-1 block w-full px-4 py-2 bg-gray-800 text-white border ${
                    errors.message ? 'border-red-500' : 'border-gray-600'
                  } rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500`}
                ></textarea>
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full inline-flex justify-center items-center px-6 py-3 border border-transparent text-lg font-medium rounded-md shadow-sm text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-colors duration-300"
                >
                  {status === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </div>
            </form>
          )}
        </div>

        {/* Social Media Links */}
        <div className="text-center">
          <p className="text-lg mb-6 text-gray-200">Or connect with me on social media:</p>
          <div className="flex justify-center space-x-6">
            {/* GitHub Icon */}
            <a
              href="https://github.com/Ric-Royal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gray-100 transition-colors duration-300"
            >
              <span className="sr-only">GitHub</span>
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {/* GitHub Icon Path */}
                <path
                  fillRule="evenodd"
                  d="M12 0C5.37 0 0 5.37 0 12a12 12 0 008.21 11.42c.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.35-1.77-1.35-1.77-1.1-.76.08-.75.08-.75 1.2.08 1.83 1.23 1.83 1.23 1.08 1.84 2.82 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.53 11.53 0 016 0c2.3-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.21.69.82.58A12 12 0 0024 12c0-6.63-5.37-12-12-12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>

            {/* LinkedIn Icon */}
            <a
              href="https://www.linkedin.com/in/richard-k-8a6128135/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-200 transition-colors duration-300"
            >
              <span className="sr-only">LinkedIn</span>
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {/* LinkedIn Icon Path */}
                <path
                  d="M22.23 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.24.79 24 1.77 24h20.46c.98 0 1.77-.76 1.77-1.72V1.72C24 .77 23.21 0 22.23 0zM7.09 20.45H3.56V9h3.53v11.45zM5.32 7.7c-1.14 0-2.07-.93-2.07-2.08a2.07 2.07 0 114.14 0c0 1.15-.93 2.08-2.07 2.08zM20.45 20.45h-3.53v-5.6c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.95v5.69h-3.53V9h3.38v1.56h.05c.47-.89 1.6-1.83 3.29-1.83 3.52 0 4.17 2.32 4.17 5.33v6.39z"
                />
              </svg>
            </a>

            {/* Medium Icon */}
            <a
              href="https://medium.com/@Ric_Royal"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-gray-100 transition-colors duration-300"
            >
              <span className="sr-only">Medium</span>
              <svg
                className="w-8 h-8"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                {/* Medium Icon Path */}
                <path
                  d="M2.01 0C.9 0 .01.9.01 2.01v19.98C.01 23.1.9 24 2.01 24H22c1.11 0 2-.89 2-2V2c0-1.1-.89-2-2-2H2.01zm16.8 6.2l-1.93 1.87v8.27l1.85 1.8v.18h-5.63v-.18l1.92-1.86V8.58l-4.38 10.61H9.6L5.39 8.58v5.84l1.82 1.83v.18H2V15.9l1.85-1.83V7.8L2 5.98V5.8h5.64l3.88 9.42L15.3 5.8h5.51v.18z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
