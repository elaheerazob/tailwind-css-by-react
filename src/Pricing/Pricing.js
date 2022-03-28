import React from 'react';
import PricsingOption from '../PricingOptions/PricsingOption';

const Pricing = () => {
    const pricingOptions =[
        {id : 1, name : 'free', price : 0, benifits : [
            '1 mounts use ',
            'No edits',
            'No wright ',
            'only read',
        ]},
        {id : 2, name : 'silver', price : 10, benifits : [
            '1 mounts use ',
            'No edits',
            'No wright ',
            'only read',
        ]},
        {id : 3, name : 'Golden', price : 50, benifits : [
            '1 mounts use ',
            'No edits',
            'No wright ',
            'only read',
        ]},
    ]
    return (
        <div className='bg-orange-300 p-5'>
            <h1 className='text-3xl bg-orange-300 p-4'>This is Pricing Card</h1>
            <div className='grid md:grid-cols-3 gap-3 mt-8'>
                {
                    pricingOptions.map(option => <PricsingOption
                        key={option.id}
                        option={option}
                    ></PricsingOption>)
                }
            </div>
        </div>
    );
};

export default Pricing;