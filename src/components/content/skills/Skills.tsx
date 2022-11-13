import React from "react";
import s from "./Skills.module.css"
import styles from "../../../styles.module.css"

const Skills = () => {
	return (
		<div className={s.skillsSection}>
			<div className={`${styles.container} ${s.skillsContainer}`}>
				<div>
					<h1>Skills</h1>
				</div>
				<div className={s.items}></div>
			</div>
		</div>
	);
};

export default Skills;