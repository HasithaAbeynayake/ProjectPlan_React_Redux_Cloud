import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

const ProjectList = ({ projects }) => {
	return (
		<div className="project-list section">
			{projects &&
				projects.map((res) => {
					return (
						<Link to={'/project/' + res.id}>
							<ProjectSummary project={res} key={res.id} />
						</Link>
					);
				})}
		</div>
	);
};

export default ProjectList;
