import { ArrowRightIcon } from '@heroicons/react/solid';
import React from 'react';
import Benifets from '../Benifets/Benifets';

const PricsingOption = (props) => {
    const {name,price,benifits} =props.option;
    return (
        <div className='bg-white p-4 rounded'>
            <h1 className='bg-indigo-300 py-2 rounded text-xl font-bold'>{name}</h1>
            <p>
                <span className='text-5xl font-bold'>{price}</span>
                <span className='text-xl font-bold'>/mon</span>
            </p>
            <div>
            {
                benifits.map(benifit => <Benifets
                    benifit={benifit}
                ></Benifets>)
            }
            </div>
            <button className='bg-orange-600 flex justify-center w-full py-4 mt-3 rounded '>
                Buy Now <ArrowRightIcon className='w-4 h-4 mr-2'></ArrowRightIcon>
            </button>
        </div>
    );
};

export default PricsingOption;