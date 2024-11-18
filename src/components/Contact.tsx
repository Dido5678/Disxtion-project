import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';
import styles from './contact.module.scss';
import Header from "../pages/Layout/Header.jsx";



interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  textarea: string;
}


const Contact: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [textarea, setTextarea] = useState<string>("");

  useEffect(() => {
    const storedData = localStorage.getItem("contactFormData");
    if (storedData) {
      const { name, email, subject, textarea } = JSON.parse(storedData) as ContactFormData;
      setName(name);
      setEmail(email);
      setSubject(subject);
      setTextarea(textarea);
    }
  }, []);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'subject':
        setSubject(value);
        break;
      case 'textarea':
        setTextarea(value);
        break;
      default:
        break;
    }
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Save data to local storage
    const formData: ContactFormData = { name, email, subject, textarea };
    localStorage.setItem("contactFormData", JSON.stringify(formData));
    alert(`Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nTextarea: ${textarea}`);
  }


  return (
    <>
      <Header />
      <section className={styles.section_contact}>
        <div className={styles.container}>
            <div className={styles.contact}>
              <div className={styles.contact_item}>
                  <h1 className={styles.contact_title}>Let’s Work Together</h1>
                  <div className={styles.contact_subtitle}>Get in touch with me</div>
                  <p className={styles.contact_desc}>I’m interested in freelance opportunities – especially ambitious or large projects. However, if you have other request or question, don’t hesitate to use the form.</p>
              </div>
              <div className={styles.contact_item2}>
                <form onSubmit={handleSubmit} className={styles.contact_form}>
                    <div>
                      <input
                        name="name"
                        type="text"
                        value={name}
                        onChange={handleInputChange}
                        placeholder="Enter your name"
                        className={styles.contact_inp} />
                    </div>
                    <div>
                      <input
                        name="email"
                        type="email"
                        value={email}
                        onChange={handleInputChange}
                        placeholder="Enter email address"
                        className={styles.contact_inp} />
                    </div>
                    <div>
                      <input
                        name="subject"
                        type="text"
                        value={subject}
                        onChange={handleInputChange}
                        placeholder="Subject"
                        className={styles.contact_inp} />
                    </div>
                    <div>
                      <textarea
                        name="textarea"
                        value={textarea}
                        cols={40}
                        rows={7}
                        onChange={handleInputChange}
                        className={styles.contact_textarea}
                        placeholder="Write me a message">
                      </textarea>
                    </div>
                    <div>
                      <button
                        type="submit"
                        className={styles.contact_button}>Contact me</button>
                    </div>
                  </form>
              </div>
            </div>
        </div>
      </section>
    </>
  );
};

export default Contact;