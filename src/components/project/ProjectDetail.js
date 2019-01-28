import React from 'react';

const ProjectDetails = (props) => {
    const id=props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-con">
                    <span className="card-title">Project Title - {id}
                    </span>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam aliquid at cum dolore enim facilis fugit id impedit incidunt, iste laborum officiis quibusdam quidem quis quisquam rem repellat sint?
                    </p>
                    <div className="card-action gret lighten-4 grey-text">
                        <div>Posted by RT</div>
                        <div>2nd September, 2am</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
