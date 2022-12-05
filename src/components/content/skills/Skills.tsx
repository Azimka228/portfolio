import React from "react";
import s from "./Skills.module.css"
import styles from "../../../styles.module.css"
import Skill from "./skill/Skill";

const Skills = () => {
	return (
		<section className={s.skillsSection}>
			<div className={`${styles.container} ${s.skillsContainer}`}>
				<div className={s.title}>
					<h1>Skills</h1>
				</div>
				<div className={s.items}>
					<Skill image={"http://sun9-72.userapi.com/c10936/g24700088/a_9591def0.jpg"} text={"Подробное описание навыка"}
												title={"HTML"}/>
					<Skill image={"http://sun9-72.userapi.com/c10936/g24700088/a_9591def0.jpg"} text={"Подробное описание навыка"}
												title={"CSS"}/>
					<Skill image={"http://sun9-72.userapi.com/c10936/g24700088/a_9591def0.jpg"} text={"Подробное описание навыка"}
												title={"JS"}/>
				</div>
			</div>
		</section>
	);
};

export default Skills;