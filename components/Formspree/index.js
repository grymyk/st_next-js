import React, { useState } from 'react';
import axios from 'axios';

export default function ContactForm() {
    const label_style = `font-bold mt-4 block text-left w-64
        sm:w-96
    `;

    const input_style = `block border-2 border-solid border-gray-300 p-2 w-64
    focus:outline-none  sm:w-96
    `;

    const input_holder_style = `flex flex-col justify-center items-center`

    const btn_style = `block mt-6 bg-[#85c47e] text-white h-12 px-8
        font-bold inline-block text-center hover:bg-green-300 cursor-pointer
    `

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: null },
  });

  const [inputs, setInputs] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleServerResponse = (ok, msg) => {
    if (ok) {
      setStatus({
        submitted: true,
        submitting: false,
        info: { error: false, msg: msg },
      });

      setInputs({
        name: '',
        email: '',
        message: '',
      });
    } else {
      setStatus({
        info: { error: true, msg: msg },
      });
    }
  };
  
  const handleOnChange = (event) => {
    event.persist();
    
    setInputs( (prev) => ({
      ...prev,
      [event.target.id]: event.target.value,
    }));
    
    setStatus({
      submitted: false,
      submitting: false,
      info: { error: false, msg: null },
    });
  };
  
  const handleOnSubmit = (event) => {
    event.preventDefault();

    setStatus( (prevStatus) => ({ ...prevStatus, submitting: true }));
    
    axios({
      method: 'POST',
      url: 'https://formspree.io/f/xjvqygpl',
      data: inputs,
    })
      .then((response) => {
        handleServerResponse(
          true,
          'Thank you, your message has been submitted.',
        );
      })
      .catch((error) => {
        handleServerResponse(false, error.response.data.error);
      });
  };

  return (
    <main>
      <form className="w-full"
        onSubmit = { handleOnSubmit }>
      <div className = { input_holder_style } >
            <label
                htmlFor="name"
                className = { label_style }
            >
                email
            </label>
            <input
                id = "name"
                type = "name"
                onChange = { handleOnChange }
                required
                value = { inputs.name }
                className = { input_style }
                placeholder = "Alica"
            />
        </div>

        <div className = { input_holder_style } >
            <label
                htmlFor="email"
                className = { label_style }
            >
                email
            </label>
            <input
                id = "email"
                type = "email"
                name ="_replyto"
                onChange = { handleOnChange }
                required
                value = { inputs.email }
                className = { input_style }
                placeholder = "alica.olsson@gmail.com"
            />
        </div>

        <div className = { input_holder_style } >
            <label
                htmlFor="message"
                className = { label_style }
            >
                message
            </label>
            <textarea
                id = "message"
                name = "message"
                onChange = { handleOnChange }
                required
                value = { inputs.message }
                className = { input_style }
                placeholder = "Hi Scandinavian Tree,"
                rows="6"
            />
        </div>
        <div className="text-center">
            <button
                className = { btn_style }
                type = "submit"
                disabled = { status.submitting }>
                {
                    !status.submitting
                    ? !status.submitted
                    ? 'Order a tree'
                    : 'Ordered'
                    : 'Ordering...'
                }
            </button>
        </div>
      </form>

      { status.info.error && (
        <div className="error">Error: {status.info.msg}</div>
      )}
      { !status.info.error && status.info.msg && <p>{status.info.msg}</p>}
    </main>
  );
};