import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

const ProjectList = ({ projects }) => {
	return (
		<div className="project-list section">
			{projects &&
				projects.map((res) => {
					return (
						<Link to={'/project/' + res.id} key={res.id}>
							<ProjectSummary project={res} />
						</Link>
					);
				})}
		</div>
	);
};

export default ProjectList;
