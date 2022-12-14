import React from "react";
import s from "./Skill.module.css"

type SkillProps = {
	image: string
	title: string
	text: string
}

const Skill = (props: SkillProps) => {
	return (
		<div className={s.skill}>
			<div className={s.icon}>
				<img src={props.image} alt="img"/>
			</div>
			<div className={s.title}>
				<p>{props.title}</p>
			</div>
			<div className={s.text}>
				<p>{props.text}</p>
			</div>
		</div>
	);
};

export default Skill;