import React from "react";
import s from "./RemoteWork.module.css"
import styles from "../../../styles.module.css";

const RemoteWork = () => {
	return (
		<section className={s.projectsSection}>
			<div className={`${styles.container} ${s.remoteWorkContainer}`}>
				<div className={s.title}>I am considering options for remote work</div>
				<button className={s.btnSubmit}>EMPLOY</button>
			</div>
		</section>
	);
};

export default RemoteWork;