// // -------------------------------Start: 34_5 ---------------------------------------
// // (8)st-rsc+enter
// import React from 'react';
// import PricingFeature from './PricingFeature';
// // (11) PricingCard = ({pricing})
// const PricingCard = ({ pricing }) => {
//     // (12)
//     console.log(pricing);

//     // return (
//     //     // (14)className='border bg-amber-600 rounded-2xl p-4'
//     //     <div className='border bg-amber-600 rounded-2xl p-4'>
//     //         {/* card header */}
//     //         {/* (13)st */}
//     //         <div>
//     //             <h1 className="text-7xl">{pricing.name}</h1>
//     //             <h4 className='text-3xl'>{pricing.price}</h4>
//     //         </div>
//     //         {/* (13)en then in PricingOptions.jsx file*/}
//     //         {/* card body */}
//     //         {/* (16)st */}
//     //         <div className='bg-amber-400 p-4 rounded-2xl mt-10'>
//     //             <p>{pricing.description}</p>
//     //         </div>
//     //         {/* (16)en */}
//     //     </div>

//         // or (17)st commit previous
//         const {name, price, description, features} = pricing;
//         return (
//         <div className='border bg-amber-600 rounded-2xl p-4'>
//             <div>
//                 <h1 className="text-7xl">{name}</h1>
//                 <h4 className='text-3xl'>{price}</h4>
//             </div>
//             <div className='bg-amber-400 p-4 rounded-2xl mt-10'>
//                 <p>{description}</p>
//                 {/* (18) create PricingFeatures.jsx file in PricingCard file in components file */}
//                 {/* (20)st <PricingFeature+enter*/}
//                 {
//                     // features.map(feature => <PricingFeature feature = {feature}></PricingFeature>)
//                     // (21)commit previous and new edit then in PricingFeature.jsx file
//                     features.map((feature, index) => <PricingFeature key={index} feature = {feature}></PricingFeature>)
//                 }
//                 {/* (20)en */}

//             </div>
//         </div>
//         // (17)en


//     );
// };

// export default PricingCard;
// // (8)en then in PricingOptions.jsx file

// // -------------------------------End:34_5-(1) to (25) ---------------------------------------
// -------------------------------Start: 34_6 ---------------------------------------

import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({ pricing }) => {
  
    console.log(pricing);

    
        const {name, price, description, features} = pricing;
        return (
            // (3) className='flex flex-col
        <div className='flex flex-col border bg-amber-600 rounded-2xl p-4'>
            {/* {card header} */}
            <div>
                <h1 className="text-7xl">{name}</h1>
                <h4 className='text-3xl'>{price}</h4>
            </div>
            {/* {card body} */}
            {/* (4) flex-1*/}
            <div className='bg-amber-400 p-4 rounded-2xl mt-10 flex-1'>
                <p>{description}</p>
               
                {
                    
                    features.map((feature, index) => <PricingFeature key={index} feature = {feature}></PricingFeature>)
                }
               

            </div>
            {/* (1) copy Wide button from daisyUI */}
            {/* <button className="btn btn-wide">Wide</button> */}
            {/* (2)commit previous and className="btn w-full"  */}
            {/* (4)mt-4 then in pricing options.jsx*/}
            <button className="btn w-full mt-4">Subscribe</button>
        </div>
      
    );
};

export default PricingCard;


// -------------------------------End:34_6-(1) to (18) ---------------------------------------