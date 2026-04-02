// -------------------------------Start: 34_6 ---------------------------------------
// (19) npm install recharts--command in terminal then create ResultChart.jsx file in ResultChart Folder in component folder
// (7)st-rsc+enter
import React from 'react';
// (10-1)DaisyPricing = ({pricing})
const DaisyPricing = ({ pricing }) => {
    // (11)const { name, price } = pricing;
    // (16)const { name, price, features } = pricing;
    // (17-2) const { name, price, features, popular } = pricing;
    const { name, price, features, popular } = pricing;
    return (
        // (8) st copy PricingCard from daisyUI
        <div className="card w-96 bg-base-100 shadow-sm">
            <div className="card-body">
                {/* (18) <span className="badge badge-xs badge-warning">Most Popular</span> convert to {popular && <span className="badge badge-xs badge-warning">Most Popular</span>}*/}
                {popular && <span className="badge badge-xs badge-warning">Most Popular</span>}
                <div className="flex justify-between">
                    {/* (12) Premium to {name} */}
                    <h2 className="text-3xl font-bold">{name}</h2>
                    {/* (13)  $29/mo to {price} */}
                    <span className="text-xl">{price}</span>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs">
                    {/* (15)st cut li and paste in map */}
                    {
                        // (16) convert features.map(feature => <li> to features.map((feature, index) => <li key={index} then in pricingData.json edit "popular": true
                        features.map((feature, index) => <li key={index}>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            {/* (17-1) */}
                            <span>{feature}</span>
                        </li>)
                    }
                    {/* (15)en */}

                    {/* (14) st commit */}
                    {/* <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Customizable style templates</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>Batch processing capabilities</span>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>AI-driven image enhancements</span>
                    </li>
                    <li className="opacity-50">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span className="line-through">Seamless cloud integration</span>
                    </li>
                    <li className="opacity-50">
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-base-content/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span className="line-through">Real-time collaboration tools</span>
                    </li> */}
                    {/* (14) en commit */}
                </ul>
                <div className="mt-6">
                    <button className="btn btn-primary btn-block">Subscribe</button>
                </div>
            </div>
        </div>
        // (8) en then in PricingOptions.jsx
    );
};

export default DaisyPricing;
// (7)en
// -------------------------------End:34_6-(1) to (18) ---------------------------------------