import './Contact.css';

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <h2>Connect</h2>
        </div>

        <div className="contact-links">
          <a href="mailto:samuelgonzalez@usf.edu">
            <span>Email</span>
            <strong>samuelgonzalez@usf.edu</strong>
          </a>
          <a href="https://github.com/SammysHyper" target="_blank" rel="noopener noreferrer">
            <span>GitHub</span>
            <strong>SammysHyper</strong>
          </a>
          <a href="https://linkedin.com/in/samuelgonzalezusf/" target="_blank" rel="noopener noreferrer">
            <span>LinkedIn</span>
            <strong>samuelgonzalezusf</strong>
          </a>
        </div>
      </div>
    </section>
  );
}
