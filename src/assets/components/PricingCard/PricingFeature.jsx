// -------------------------------Start: 34_5 ---------------------------------------
// (19)st rsc+enter
import { CircleCheckBig } from 'lucide-react';
import React from 'react';
// (22)PricingFeature = ({feature})
const PricingFeature = ({feature}) => {
    return (
        // (23)div convert to p and <p>{feature}</p>
        // (24)<CircleCheckBig+Enter
        // (25) <p className='flex mt-4'/CircleCheckBig className='mr-2'
        <p className='flex mt-4'><CircleCheckBig className='mr-2'></CircleCheckBig> {feature}</p>
    );
};

export default PricingFeature;
// (19)en then in pricing card

// -------------------------------End:34_5-(1) to (25) ---------------------------------------