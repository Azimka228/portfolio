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
					<Skill image={"https://cdn-icons-png.flaticon.com/512/174/174854.png"} text={"Подробное описание навыка"}
												title={"HTML"}/>
					<Skill image={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/800px-CSS3_logo.svg.png"} text={"Подробное описание навыка"}
												title={"CSS"}/>
					<Skill image={"https://repository-images.githubusercontent.com/347723622/92065800-865a-11eb-9626-dff3cb7fef55"} text={"Подробное описание навыка"}
												title={"Redux"}/>
				</div>
			</div>
		</section>
	);
};

export default Skills;