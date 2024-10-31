import React, { useState } from 'react';

const Contact: React.FC = () => {
  type FormFields = 'name' | 'email' | 'message';

  const [form, setForm] = useState<{ [key in FormFields]: string }>({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState<{ [key in FormFields]?: string }>({});

  const handleBlur = (field: FormFields) => {
    if (!form[field]) setErrors((prev) => ({ ...prev, [field]: 'This field is required' }));
    else if (field === 'email' && !validateEmail(form.email))
      setErrors((prev) => ({ ...prev, email: 'Invalid email address' }));
    else setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  return (
    <section>
      <h2>Contact</h2>
      <form>
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onBlur={() => handleBlur('name')}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <span>{errors.name}</span>

        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onBlur={() => handleBlur('email')}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <span>{errors.email}</span>

        <textarea
          placeholder="Message"
          value={form.message}
          onBlur={() => handleBlur('message')}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
        <span>{errors.message}</span>

        <button type="submit">Send</button>
      </form>
      <p>alecknipe919@gmail.com</p>
    </section>
  );
};

export default Contact;
function validateEmail(email: string) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

