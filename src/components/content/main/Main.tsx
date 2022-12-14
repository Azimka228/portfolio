import React from "react";
import s from "./Main.module.css"
import styles from "../../../styles.module.css"

const Main = () => {
	return (
		<section className={s.mainSection}>
			<div className={`${styles.container} ${s.MainContainer}`}>
				<div className={s.photo}>
					<div>Photo</div>
				</div>
				<div className={s.text}>
					{/*<h3>Dmitry Kulhauchuk</h3>*/}
					<h6>Front-end Developer</h6>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab amet animi at beatae, consequuntur cupiditate et
						facere ipsa iusto mollitia nam natus officiis qui quisquam rem rerum sunt ut veritatis.</p>
					<div className={s.downloadCV}>
						<a href="">Download CV</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Main;