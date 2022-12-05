import React from "react";
import s from "../footer.module.css";

type SocItemProps = {
	image: string
}

const SocItem = (props:SocItemProps) => {
	return (
		<div className={s.item}>
			<a>
				<img src={props.image} alt="image"/>
			</a>
		</div>
	);
};

export default SocItem;