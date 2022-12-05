import React from "react";
import s from "./footer.module.css"
import styles from "../../styles.module.css";
import SocItem from "./Items/socItem";

const Footer = () => {
	return (
		<footer className={s.footerSection}>
			<div className={`${styles.container} ${s.footerContainer}`}>
				<div className={s.header}>Dmitriy</div>
				<div className={s.socialsBlock}>
				<SocItem image={"https://svgsilh.com/svg_v2/303792.svg"}/>
				<SocItem image={"https://svgsilh.com/svg_v2/303792.svg"}/>
				<SocItem image={"https://svgsilh.com/svg_v2/303792.svg"}/>
				<SocItem image={"https://svgsilh.com/svg_v2/303792.svg"}/>
				</div>
				<div>
					© 2022 All Rights Reserved.
				</div>
			</div>
		</footer>
	);
};

export default Footer;