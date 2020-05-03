import React from 'react';
import ProjectSummary from './ProjectSummary';

const ProjectList = ({ projects }) => {
	return (
		<div className="project-list section">
			{projects &&
				projects.map((res) => {
					return <ProjectSummary project={res} key={res.id} />;
				})}
		</div>
	);
};

export default ProjectList;
