import './Contact.css';

export default function Contact() {
  return (
    <section id="contact">
      <h2>Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-info">
          {/*<h3>Feel free to reach out</h3>
         */}
          <div className="contact-links">
            <a href="mailto:samuelgonzalez@usf.edu"> 📧 samuelgonzalez@usf.edu</a>
            <a href="https://github.com/SammysHyper" target="_blank" rel="noopener noreferrer">
               🐙 GitHub
            </a>
            <a href="https://linkedin.com/in/samuelgonzalezusf/" target="_blank" rel="noopener noreferrer">
               💼 LinkedIn
            </a>
          </div>
        </div>

        {/*
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>

          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} />
          </div>

          <button type="submit" className="submit-btn">
            Send Message
          </button>
        </form>
        */}
      </div>
    </section>
  );
}
