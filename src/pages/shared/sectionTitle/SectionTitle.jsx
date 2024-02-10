import React from 'react';

const SectionTitle = ({subHeading, heading}) => {
    return (
        <div className='mb-10 mt-10 text-center w-4/5 md:w-1/2 mx-auto'>
            <p className='text-yellow-600 mb-2'>--- {subHeading} ---</p>
            <h3 className='text-4xl border-y-4 p-4'>{heading}</h3>
        </div>
    );
};

export default SectionTitle;