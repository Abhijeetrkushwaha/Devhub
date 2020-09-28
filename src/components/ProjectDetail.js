import React from 'react';
import { Redirect } from 'react-router-dom';
// import { db } from '../firebase';


function ProjectDetail(props) {

    const { user } = props
    console.log(props);
    console.log();

    const userIsLogin = !user ?   <Redirect to="/signup" /> : (
        <div className="container">
            <h2>hi</h2>
            {props.match.params.id}
        </div>
    )
    return (
        <div>
            { userIsLogin }
        </div>
    )
}

export default ProjectDetail
