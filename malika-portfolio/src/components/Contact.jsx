// Раздел «Контакты»: WhatsApp, Telegram и GitHub.
import { contacts } from '../data/portfolio.js';

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <div className="container contact-inner">
        <p className="eyebrow">04 / КОНТАКТЫ</p>
        <h2>
          Давайте создадим
          <br />
          <span className="gradient-text">что-нибудь классное.</span>
        </h2>
        <p className="contact-intro">
          Открыта к стажировкам, junior-возможностям и интересным проектам. Буду рада знакомству!
        </p>

        <div className="contact-links">
          {contacts.map((contact) => (
            <a key={contact.label} href={contact.url} target="_blank" rel="noreferrer">
              <span className="contact-icon">{contact.icon}</span>
              <span>
                <small>{contact.label}</small>
                <strong>{contact.value}</strong>
              </span>
              <b>↗</b>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
