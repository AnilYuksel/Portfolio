import { useState, useRef} from "react"
import "./contact.scss"
import emailjs from '@emailjs/browser';

const Contact = () => {

  const [message,setMessage] = useState(false)

    const form = useRef()

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage(true)
    emailjs.sendForm('gmail', 'template_po4e73c', form.current, 'user_lmZkGWqEn4sL8hogGB9gh')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
    <div className="contact" id="contact">
      <div className="left">
        <img src="assets/shake.svg" alt=""></img>
      </div>
      <div className="right">
        <h2>Get In Touch</h2>
        <form onSubmit={handleSubmit} ref={form}>
          <input type="text" placeholder="Full Name" name="fullname"></input>
          <input type="text" placeholder="Email" name="email"></input>
          <input type="text" placeholder="Subject" name="subject"></input>
          <textarea placeholder="Message" name="message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP :)</span>}
        </form>
      </div>  
    </div>
  )
}

export default Contact