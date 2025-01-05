import React from 'react';

const SkillCard = ({title,img}) => {
    return (
        <div className="card bg-blue-800 text-white">
            <div className="card-body items-center text-center">
                <img className='w-32 object-cover h-30' src={img} alt="" />
                <h2 className="card-title md:text-2xl text-xl">{title}</h2>
            </div>
        </div>
    );
};

export default SkillCard;