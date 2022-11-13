import React from "react";
import s from "./Header.module.css"
import styles from "../../styles.module.css"

const Header = () => {
	return (
		<div className={s.header}>
			<div className={`${styles.container} ${s.headerContainer}`}>
				<nav className={s.navigation}>
					<a href="">Home</a>
					<a href="">Skills</a>
					<a href="">Projects</a>
					<a href="">FeedBack</a>
				</nav>
			</div>
		</div>
	);
};

export default Header;