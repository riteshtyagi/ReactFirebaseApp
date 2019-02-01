import React from 'react';
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from "react-router-dom";
import moment from "moment/moment";

const ProjectDetails = (props) => {
    //const id=props.match.params.id;
    const {project, auth} = props;
    if (!auth.uid) return <Redirect to='/signin'/>
    if (project) {
        return (
            <div className="container section project-details">
                <div className="card z-depth-0">
                    <div className="card-con">
                    <span className="card-title">{project.title}
                    </span>
                        <p>
                            {project.content}
                        </p>
                        <div className="card-action gret lighten-4 grey-text">
                            <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
                            <div>
                                <p className="grey-text">{moment(project.createdAt.toDate()).calendar()}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className="container center">
                <p>Loading Project...</p>
            </div>
        )
    }
};

const mapStateToProps = (state, ownProps) => {
    const projects = state.firestore.data.project;
    const project = projects ? projects[ownProps.match.params.id] : null;
    return {
        project,
        auth: state.firebase.auth
    }
};

export default compose(
    connect(mapStateToProps),
    firestoreConnect([{collection: 'project'}])
)(ProjectDetails);
