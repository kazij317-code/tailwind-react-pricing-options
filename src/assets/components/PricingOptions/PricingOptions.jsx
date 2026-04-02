// // -------------------------------Start: 34_4 ---------------------------------------
// // (9)rsc+enter then Create pricingData.json file in public folder 
// import React from 'react';



// const PricingOptions = () => {
//     return (
//         <div>

//         </div>
//     );
// };

// export default PricingOptions;

// // -------------------------------End:34_4-(1) to (10) ---------------------------------------
// // -------------------------------Start: 34_5 ---------------------------------------

// import { use } from "react";
// import PricingCard from "../PricingCard/PricingCard";
// // (6)PricingOptions = ({pricingPromise})
// const PricingOptions = ({ pricingPromise }) => {
//     // (7)st use+enter
//     const pricingData = use(pricingPromise);
//     console.log(pricingData);
//     // (7)-en then PricingCard.jsx file is created in PricingCard folder in components folder


//     return (
//         <div>
//             {/* (9) */}
//             <h2 className='text-5xl'>Get our Membership</h2>
//             {/* (10)st PricingCard+enter then in PricingCard.jsx*/}
//             {/* (15) className='grid md:grid-cols-3 gap-8'> then in PricingCard.jsx */}
//             <div className='grid md:grid-cols-3 gap-8'>
//                 {
//                     pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
//                 }
//             </div>

//             {/* (10)en */}

//         </div>
//     );
// };

// export default PricingOptions;

// // -------------------------------End:34_5-(1) to (25) ---------------------------------------
// -------------------------------Start: 34_6 ---------------------------------------
import { use } from "react";
import PricingCard from "../PricingCard/PricingCard";
import DaisyPricing from "../DaisyPricing/DaisyPricing";

const PricingOptions = ({ pricingPromise }) => {

    const pricingData = use(pricingPromise);
    console.log(pricingData);
   


    return (
        <div>
           
            <h2 className='text-5xl'>Get our Membership</h2>
         
            {/* (5)className='grid md:grid-cols-3 gap-8' convert to className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'  */}
            {/* (6) create DaisyPricing.jsx in DaisyPricing folder in component folder */}
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
               {/* (9) commit this*/}
                {/* {
                    pricingData.map(pricing => <PricingCard key={pricing.id} pricing={pricing}></PricingCard>)
                } */}
                {/* (10)st <DaisyPricing+enter*/}
                {
                    pricingData.map(pricing =>   <DaisyPricing key={pricing.id} pricing={pricing}></DaisyPricing>)
                }
                {/* (10)en then in DaisyPricing.jsx*/}

            </div>

     

        </div>
    );
};

export default PricingOptions;
// -------------------------------End:34_6-(1) to (18) ---------------------------------------