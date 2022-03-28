import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/solid'

const Benifets = (props) => {
    return (
        <p className='flex items-center'>
            <CheckCircleIcon className='w-4 h-4'></CheckCircleIcon>
            {props.benifit}
        </p>
    );
};

export default Benifets;