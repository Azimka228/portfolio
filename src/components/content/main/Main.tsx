import React from "react";
import s from "./Main.module.css"
import styles from "../../../styles.module.css"

const Main = () => {
	return (
		<div className={s.mainSection}>
			<div className={`${styles.container} ${s.MainContainer}`}>
				<div className={s.text}>
					<h3>Dmitry Kulhauchuk</h3>
					<p>Front end Dev</p>
					<div>
						<a href="">Get Connected</a>
					</div>
				</div>
				<div className={s.photo}>
					<div>Photo</div>
				</div>
			</div>
		</div>
	);
};

export default Main;