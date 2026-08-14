import { BsTelephone } from 'react-icons/bs';
import { CiLocationOn } from 'react-icons/ci';
import { TfiTime } from 'react-icons/tfi';
import styles from '../public_contact/contact.module.css';

const ContactUsView = () => {
  return (
    <div className={styles.wrapper}>
      {/* Image */}
      <div className={styles.imageWrapper}>
        <img
          src="https://www.theindexcigars.com.au/cdn/shop/files/Component_94_1_1080x.png?v=1692264469"
          alt="theindexcigars"
          className={styles.image}
        />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <h2 className={styles.mainHeading}>Get In Touch</h2>
        <p className={styles.description}>
          Our artfully designed Brisbane Maison is open to the public 6 days a week.
        </p>

        <div className={styles.infoGroup}>
          {/* Info */}
          <div className={styles.infoColumn}>
            <section>
              <h3 className={styles.sectionHeading}>Call Us</h3>
              <div className={styles.infoRow}>
                <BsTelephone className={styles.icon} size={18} />
                <span>(07) 2111 1666</span>
              </div>
            </section>

            <section>
              <h3 className={styles.sectionHeading}>Visit Us</h3>

              <div className={styles.infoRowStart}>
                <TfiTime className={styles.icon} size={20} />
                <div className={styles.infoText}>
                  <p>Monday - Friday: 10 am - 6 pm</p>
                  <p>Saturday: 10am - 4 pm</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              <div className={styles.infoRowStart}>
                <CiLocationOn className={styles.icon} size={24} />
                <div className={styles.infoText}>
                  <p>Shop 1/57 - 59 Rosemount Terrace</p>
                  <p>Windsor QLD 4030</p>
                  <p>Australia</p>
                </div>
              </div>
            </section>
          </div>

          {/* Form */}
          <div className={styles.formColumn}>
            <h3 className={styles.sectionHeading}>Send a Message</h3>

            <form className={styles.form}>
              <input placeholder="Name" className={styles.inputField} />
              <input type="email" placeholder="Email*" required className={styles.inputField} />
              <input type="tel" placeholder="+61" className={styles.inputField} />

              <select required defaultValue="" className={styles.selectField}>
                <option value="" disabled>
                  Type of Enquiry*
                </option>
                <option value="general">General Inquiry</option>
                <option value="booking">Private Booking</option>
                <option value="wholesale">Wholesale</option>
              </select>

              <textarea rows="5" placeholder="Message*" className={styles.textarea} />

              <div className={styles.buttonGroup}>
                <button className={styles.primaryBtn}>Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsView;
