"use client";

import Image from "next/image";
import isEmail from "validator/lib/isEmail";
import { useState, useEffect, useRef } from "react";
// import { formatContactFormPayload } from "@/utilities/validations/GeneralContactFormValidator";
import Input from "../_Inputs/Input";
import Textarea from "../_Inputs/Textarea";
import PhoneInput from "../_Inputs/PhoneInput";
import { useForm, ValidationError } from "@formspree/react";

interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function GeneralContact() {
  const form = useRef(null);
  const [state, handleSubmit] = useForm("xoqgvrpl");

  const [loading, setLoading] = useState<boolean>(false);

  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [subject, setSubject] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  const [nameComplete, setNameComplete] = useState<boolean>(false);
  const [emailComplete, setEmailComplete] = useState<boolean>(false);
  const [phoneComplete, setPhoneComplete] = useState<boolean>(false);
  const [subjectComplete, setSubjectComplete] = useState<boolean>(false);
  const [messageComplete, setMessageComplete] = useState<boolean>(false);

  useEffect(() => {
    if (name !== "") setNameComplete(true);
    else if (nameComplete) setNameComplete(false);
  }, [name, nameComplete]);

  useEffect(() => {
    if (email !== "" && isEmail(email.trim())) setEmailComplete(true);
    else if (emailComplete) setEmailComplete(false);
  }, [email, emailComplete]);

  useEffect(() => {
    if (phone !== "" && phone.trim().length === 14) setPhoneComplete(true);
    else if (phoneComplete) setPhoneComplete(false);
  }, [phone, phoneComplete]);

  useEffect(() => {
    if (subject !== "") setSubjectComplete(true);
    else if (subjectComplete) setSubjectComplete(false);
  }, [subject, subjectComplete]);

  useEffect(() => {
    if (message !== "") setMessageComplete(true);
    else if (messageComplete) setMessageComplete(false);
  }, [message, messageComplete]);

  const clearForm = () => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
  };

  /*
  const submitForm = async (e: any) => {
    e.preventDefault();

    const values: ContactFormValues = { name, email, subject, message };
    const payload: any = formatContactFormPayload(values);
    //const payload = form.current || "";

    const timeout = 600;
    setLoading(true);

    return emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_CONTACT_TEMPLATE_ID || "",
        payload,
        process.env.NEXT_PUBLIC_EMAIL_SERVICE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log({ result });
          return setTimeout(() => {
            clearForm();
            setLoading(false);
          }, timeout);
        },
        (error) => {
          console.log({ error });
          return setTimeout(() => setLoading(false), timeout);
        }
      );
  };
  */

  const formIsComplete =
    nameComplete && emailComplete && subjectComplete && messageComplete;
  const isSuccessful = state.succeeded;

  return (
    <>
      {isSuccessful ? (
        <div className="contact-submission-secondary">
          <div id="successful-submission" className="form_loader_container">
            <div className="column flex align-center justify-center my-10">
              <div className="checkmark-container">
                <Image
                  src="/svg/checkmark.svg"
                  height={36}
                  width={36}
                  className="submission-check"
                  alt="check-icon"
                />
              </div>
              <p className="success-txt text-center">THANK YOU</p>
            </div>

            <p className="text-center my-10">Your submission was successful</p>

            <span className="reset-form" onClick={clearForm}>
              Reset
            </span>
          </div>
        </div>
      ) : null}

      {!isSuccessful ? (
        <>
          <form
            id="general-contact-form"
            className={loading ? "form loading" : "form"}
            onSubmit={handleSubmit}
            ref={form}
          >
            {loading ? (
              <div className="form_loader_container py-5">
                <Image
                  src="/gif/loader.gif"
                  height={60}
                  width={80}
                  alt="loader"
                />
                <span>SUBMITTING</span>
              </div>
            ) : (
              <>
                <Input
                  name="name"
                  value={name}
                  onChange={setName}
                  type="text"
                  placeholder="Your Name"
                  isComplete={nameComplete}
                  label="Name"
                  // error={nameError ? nameError.message : null}
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                />

                <Input
                  name="email"
                  value={email}
                  onChange={setEmail}
                  type="text"
                  placeholder="email@example.com"
                  isComplete={emailComplete}
                  label="Email"
                  // error={emailError ? emailError.message : null}
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />

                <PhoneInput
                  name="phone"
                  label="Phone"
                  placeholder="(xxx) xxx-xxxx"
                  value={phone}
                  onChange={(x: string) => {
                    if (x.length > 14) return;
                    else setPhone(x);
                  }}
                  isComplete={phoneComplete}
                  // error={phoneError ? phoneError.message : null}
                />
                <ValidationError
                  prefix="Phone"
                  field="phone"
                  errors={state.errors}
                />

                <Input
                  name="subject"
                  value={subject}
                  onChange={setSubject}
                  type="text"
                  placeholder="Subject"
                  isComplete={subjectComplete}
                  label="Subject"
                  // error={subjectError ? subjectError.message : null}
                />
                <ValidationError
                  prefix="Subject"
                  field="subject"
                  errors={state.errors}
                />

                <Textarea
                  name="message"
                  value={message}
                  onChange={setMessage}
                  placeholder="Your message..."
                  isComplete={messageComplete}
                  label="Message"
                  rows={6}
                  // error={messageError ? messageError.message : null}
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />

                <div className="row">
                  <div className="flex1 column">
                    <button
                      type="submit"
                      className="submit_btn"
                      disabled={!formIsComplete || state.submitting}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </>
            )}
          </form>
        </>
      ) : null}
    </>
  );
}
