import React from "react";
import s from "./Contacts.module.css"
import styles from "../../../styles.module.css";

const Contacts = () => {
	return (
		<section className={s.contactsSection}>
			<div className={`${styles.container} ${s.contactsContainer}`}>
				<div>Contacts</div>
				<form className={s.form}>
					<input type="text" name="name" placeholder="name" />
					<input type="email" name="email" placeholder="email"/>
					<textarea className="Contacts_messageArea__1G9nl" name="message"
															placeholder="This form works, but sends your message to a test mail. Please, if you want to write to me, use the contacts listed below."
															id="" cols={30} rows={10}></textarea>
					<button>SEND</button>
				</form>
			</div>
		</section>
	);
};

export default Contacts;