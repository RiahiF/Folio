import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							
							<div className="work-title">TIS Circuits</div>
							<div className="work-subtitle">
								Web Designer
							</div>
							<div className="work-duration">2022 - 2022</div>
						</div>

					</div>
				}
			/>
		</div>
	);
};

export default Works;
