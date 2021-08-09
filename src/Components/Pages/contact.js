import React from 'react';
import { useState } from 'react';
import './contact.scss';


const ContactLewis = (props) => {

  const [form, setForm] = useState({
    name: null,
    email: null,
    enquiry: null,
    newsletterSubscription: false,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  }

  const handleCheckbox = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.checked
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(form.email)) {
      alert(
        'Your name: ' + form.name + '\r\n' +
        'Email: ' + form.email + '\r\n' +
        'Enquiry: ' + form.enquiry + '\r\n' +
        'newsletter subscription: ' + form.newsletterSubscription
      );
    } else {
      alert('Please use a valid email address');
    }

  }

  return (

    <form onSubmit={handleSubmit}>
      <h1>Contact Lewis</h1>
      <label>
        Name:
      </label>
      <input type="text" value={form.name} name="name" onChange={handleChange} />
      <label>
        Email:
      </label>
      <input type="text" value={form.email} name="email" onChange={handleChange} />

      <label>
        Enquiry:
      </label>
      <textarea rows="7" cols="50" value={form.enquiry} name="enquiry" onChange={handleChange} />

      <label className='label-checkbox'>
        <input type="checkbox" checked={form.newsletterSubscription} name="newsletterSubscription"
          onChange={handleCheckbox}
        />
        Subscribe to Lewis' regular newsletter
      </label>

      <input className="input-submit" type="submit" value="Submit" />
    </form>
  );
}

export default ContactLewis;