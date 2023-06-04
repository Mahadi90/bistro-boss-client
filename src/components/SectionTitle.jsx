import React from 'react';

const SectionTitle = ({subHeading, Heading}) => {
    return (
        <div className='md:w-4/12 mx-auto text-center my-4 pt-14 pb-2'>
            <p className='text-yellow-500 mb-2'>---{subHeading}---</p>
            <h3 className='text-3xl border-y-4 py-4'>{Heading}</h3>
        </div>
    );
};

export default SectionTitle;