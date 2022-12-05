import React from "react";
import s from "./projects.module.css"
import styles from "../../../styles.module.css"
import Project from "./project/project";

const Projects = () => {
	return (
		<section className={s.projectsSection}>
			<div className={`${styles.container} ${s.projectsContainer}`}>
				<div className={s.title}>
					<h1>My projects</h1>
				</div>
				<div className={s.items}>
					<Project image={"https://sun9-72.userapi.com/c10936/g24700088/a_9591def0.jpg"} text={"Text text text"}
														title={"Social Network"}/>
					<Project image={"https://sun9-72.userapi.com/c10936/g24700088/a_9591def0.jpg"} text={"Text text text"}
														title={"Todo List"}/>
					<Project image={"http://sun9-72.userapi.com/c10936/g24700088/a_9591def0.jpg"} text={"Text text text"}
														title={"Vape liquid"}/>
				</div>
			</div>
		</section>
	);
};

export default Projects;