import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ContactsSvg from "./ContactsSvg";
import { motion, useInView } from "motion/react";

const listVariants = {
  initial: {
    x: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  initial: {
    opacity: 0,
    x: 100,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Contacts() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { margin: "-200px" });

  const sendEmail = (e: any) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          form.current,
          {
            publicKey: import.meta.env.VITE_PUBLIC_KEY,
          }
        )
        .then(
          () => {
            setSuccess(true);
            setError(false);
          },
          (error) => {
            setError(true);
            setSuccess(false);
            console.log(error);
          }
        );
    }
  };

  return (
    <div className="contactsContainer">
      <motion.div
        className="contactsForm"
        ref={ref}
        variants={listVariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
      >
        <motion.form className="form" ref={form} onSubmit={sendEmail}>
          <motion.h1 className="contactsTitle" variants={itemVariants}>
            Let's keep in touch
          </motion.h1>
          <motion.div className="formItem" variants={itemVariants}>
            <label htmlFor="email" className="contactsLabel">
              Email
            </label>
            <input
              type="text"
              className="contactsInput"
              placeholder="john@gmail.com"
              name="user_email"
            />
          </motion.div>
          <motion.div className="formItem" variants={itemVariants}>
            <label htmlFor="name" className="contactsLabel">
              Name
            </label>
            <input
              type="text"
              name="user_name"
              className="contactsInput"
              placeholder="John"
            />
          </motion.div>
          <motion.div className="formItem" variants={itemVariants}>
            <label htmlFor="message">Message</label>
            <textarea
              className="textarea"
              rows={10}
              placeholder="Write me here ..."
              name="message"
            />
          </motion.div>
          <motion.button className="formButton" variants={itemVariants}>
            Submit
          </motion.button>
          {success && <span>Your message has been sent!</span>}
          {error && <span>Something went wrong!</span>}
        </motion.form>
      </motion.div>
      <motion.div className="contactsSVG">
        <ContactsSvg />
      </motion.div>
    </div>
  );
}
