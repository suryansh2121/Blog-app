"use client"
import React, { useState } from 'react';
import styles from './contact.module.css'; // Importing CSS for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [responseMessage, setResponseMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();

      if (res.ok) {
        setResponseMessage(result.success);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setResponseMessage(result.error);
      }
    } catch (error) {
      setResponseMessage('Something went wrong.');
    }
  };

  return (
    <section className={styles.contactContainer}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Get in Touch</h1>
        <p className={styles.subheading}>
          Feel free to reach out to me by filling out the form below or using the contact details provided.
        </p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Enter your message"
              required
            ></textarea>
          </div>

          <button type="submit" className={styles.submitButton}>Send Message</button>
        </form>

        {responseMessage && <p className={styles.response}>{responseMessage}</p>}
      </div>
    </section>
  );
};

export default Contact;
