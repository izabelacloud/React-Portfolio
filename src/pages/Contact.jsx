import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHeading from '../components/PageHeading';
import { validateEmail } from '../utils/helpers';

const initialState = { name: '', email: '', message: '' };
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

export default function Contact() {
  const [formState, setFormState] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  function validate(state) {
    const nextErrors = {};
    if (!state.name.trim()) nextErrors.name = 'Name is required.';
    if (!state.email.trim()) {
      nextErrors.email = 'Email is required.';
    } else if (!validateEmail(state.email)) {
      nextErrors.email = 'Please enter a valid email address.';
    }
    if (!state.message.trim()) nextErrors.message = 'Message is required.';
    return nextErrors;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = validate(formState);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus('sending');
    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_ACCESS_KEY,
          subject: `Portfolio contact from ${formState.name}`,
          ...formState,
        }),
      });
      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormState(initialState);
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  const fields = [
    { name: 'name', label: 'Name', type: 'text' },
    { name: 'email', label: 'Email Address', type: 'email' },
  ];

  return (
    <section>
      <PageHeading title="Contact" subtitle="Have a question or want to work together? Reach out." />

      <form onSubmit={handleSubmit} noValidate className="max-w-lg space-y-5">
        {fields.map((field) => (
          <div key={field.name}>
            <label htmlFor={field.name} className="mb-1.5 block text-sm font-semibold">
              {field.label}
            </label>
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              value={formState[field.name]}
              onChange={handleChange}
              aria-invalid={Boolean(errors[field.name])}
              aria-describedby={errors[field.name] ? `${field.name}-error` : undefined}
              className="w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 outline-none transition-shadow focus:border-primary focus:ring-2 focus:ring-primary/30 dark:border-white/10 dark:bg-white/5"
            />
            {errors[field.name] && (
              <p id={`${field.name}-error`} className="mt-1 text-sm text-red-500">
                {errors[field.name]}
              </p>
            )}
          </div>
        ))}

        <div>
          <label htmlFor="message" className="mb-1.5 block text-sm font-semibold">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formState.message}
            onChange={handleChange}
            aria-invalid={Boolean(errors.message)}
            aria-describedby={errors.message ? 'message-error' : undefined}
            className="w-full rounded-xl border border-black/10 bg-white px-4 py-2.5 outline-none transition-shadow focus:border-primary focus:ring-2 focus:ring-primary/30 dark:border-white/10 dark:bg-white/5"
          />
          {errors.message && (
            <p id="message-error" className="mt-1 text-sm text-red-500">
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="rounded-full bg-primary px-6 py-2.5 font-bold text-white shadow-sm transition-colors hover:bg-primary-dark disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === 'sending' ? 'Sending...' : 'Send Message'}
        </button>

        <AnimatePresence>
          {status === 'success' && (
            <motion.p
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-sm font-semibold text-tertiary"
            >
              Your email was sent! I&apos;ll get back to you soon.
            </motion.p>
          )}
          {status === 'error' && (
            <motion.p
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-sm font-semibold text-red-500"
            >
              Something went wrong sending your message. Please try again or email me directly.
            </motion.p>
          )}
        </AnimatePresence>
      </form>
    </section>
  );
}
