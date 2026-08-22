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
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);

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

  function addFiles(newFiles) {
    setFiles((prev) => [...prev, ...Array.from(newFiles)]);
  }

  function removeFile(index) {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  }

  function handleFileInputChange(e) {
    if (e.target.files.length) addFiles(e.target.files);
    e.target.value = '';
  }

  function handleDragOver(e) {
    e.preventDefault();
    setIsDragging(true);
  }

  function handleDragLeave() {
    setIsDragging(false);
  }

  function handleDrop(e) {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files.length) addFiles(e.dataTransfer.files);
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const nextErrors = validate(formState);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setStatus('sending');
    try {
      const data = new FormData();
      data.append('access_key', WEB3FORMS_ACCESS_KEY);
      data.append('subject', `Portfolio contact from ${formState.name}`);
      data.append('name', formState.name);
      data.append('email', formState.email);
      data.append('message', formState.message);
      files.forEach((file) => data.append('attachment', file));

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setFormState(initialState);
        setFiles([]);
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

        <div>
          <label className="mb-1.5 block text-sm font-semibold">Attachments</label>
          <label
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={`flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-dashed px-4 py-8 text-center transition-colors ${
              isDragging
                ? 'border-primary bg-primary/5'
                : 'border-black/10 dark:border-white/10'
            }`}
          >
            <input type="file" multiple onChange={handleFileInputChange} className="hidden" />
            <p className="text-sm text-ink/60 dark:text-slate-400">
              Drag and drop files here, or click to browse
            </p>
          </label>

          {files.length > 0 && (
            <ul className="mt-3 space-y-2">
              {files.map((file, index) => (
                <li
                  key={`${file.name}-${index}`}
                  className="flex items-center justify-between rounded-lg border border-black/10 bg-white px-3 py-2 text-sm dark:border-white/10 dark:bg-white/5"
                >
                  <span className="truncate">{file.name}</span>
                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="ml-3 shrink-0 font-semibold text-red-500 hover:text-red-600"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
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
