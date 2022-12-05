import React from "react";
import s from "./project.module.css"

type SkillProps = {
	image: string
	title: string
	text: string
}

const Project = (props: SkillProps) => {
	return (
		<div className={s.project}>
			<div className={s.icon}
								style={{backgroundImage: `url(${props.image})`}}>
				<a href="#" className={s.projectLink}>Site</a>
				<a href="#" className={s.projectLink}>Code</a>
			</div>
			<div className={s.text}>
				<div>{props.title}</div>
				<div>{props.text}</div>
			</div>
		</div>
	);
};

export default Project;