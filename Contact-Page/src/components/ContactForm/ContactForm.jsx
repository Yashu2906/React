import Button from "../button/button";
import MessageIcon from "@mui/icons-material/Message";
import CallIcon from "@mui/icons-material/Call";
import styles from "./ContactForm.module.css";
import MailIcon from "@mui/icons-material/Mail";

const ContactForm = () => {
  return (
    <section className={styles.container}>
      <div>
        <div className={styles.Contact_Form}>
          <div className={styles.top_btn}>
            <Button text="VIA SUPPORT CHAT" icon={<MessageIcon />} />
            <Button text="VIA CALL" icon={<CallIcon />} />
          </div>
          <Button isOutline={true} text="VIA EMAIL FORM" icon={<MailIcon />} />
        </div>
        <form>
          <div className={styles.control_form}>
            <label htmlFor="Name">Name</label>
            <input type="text" name="name " />
          </div>
          <div className={styles.control_form}>
            <label htmlFor="Email">Email</label>
            <input type="Email" name="Email " />
          </div>
          <div className={styles.control_form}>
            <label htmlFor="Text">Text</label>
            <textarea rows="8" type="text" name="Text " />
          </div>
        </form>
        <div
          style={{ display: "flex", justifyContent: "end", marginTop: "17px" }}
        >
          <Button text="SUBMIT" />
        </div>
      </div>
      <div className={styles.contact_img}>
        <img src="./images/Service 24_7-pana 1.svg" alt="contact_img" />
      </div>
    </section>
  );
};

export default ContactForm;
