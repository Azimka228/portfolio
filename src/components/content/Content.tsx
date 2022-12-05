import React from "react";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/projects";
import Contacts from "./contacts/Contacts";
import RemoteWork from "./remoteWork/RemoteWork";

const Content = () => {
	return (
		<>
			<Main/>
			<Skills/>
			<Projects/>
			<RemoteWork/>
			<Contacts/>
		</>
	);
};

export default Content;