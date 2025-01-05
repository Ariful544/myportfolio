import React from 'react';

const ProjectCard = ({title,details,githubLink,liveLink,img}) => {
    return (
        <div className="card card-compact bg-base-100">
            <figure>
                <img
                    src={img}
                    alt="" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{details}</p>
                <div className="card-actions justify-end">
                    <a target='_blank' href={githubLink} className="btn btn-primary">Github link</a>
                    <a target='_blank' href={liveLink} className="btn bg-violet-600 hover:bg-violet-700 text-white">live link</a>
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;