// -------------------------------Start: 34_2 ---------------------------------------
// // (5)st- rsc+enter
// import React from 'react';
// import Link from './Link';
// // (9)st from chatgpt
// const navigationData = [
//     { id: 1, name: "Home", path: "/home" },
//     { id: 2, name: "About Us", path: "/about-us" },
//     { id: 3, name: "Services", path: "/services" },
//     { id: 4, name: "Blog", path: "/blog" },
//     { id: 5, name: "Contact", path: "/contact" }
// ];

// // (9)en


// const NavBar = () => {
//     return (
//         // (6)st-div convert to nav ul and li create
//         <nav>
//             {/* (12) st commit (10) Link+enter */}
//             <ul className='flex'>
//                 {
//                     navigationData.map(route =><Link key={route.id} route={route}></Link>)
//                 }
//             </ul>
//             {/* (12) en then in Link.jsx file*/}
            
//             {/* (10) st commit next ul */}
//             {/* <ul className='flex'>
//                 {
//                     navigationData.map(route => <li className='mr-10'><a href={route.path}>{route.name}</a></li>)
//                 }
//             </ul> */}
//             {/* (10) en then make Link.jsx in NavBar folder*/}

//             {/* (8) <ul className='flex'>, <li className='mr-10' */}
//             {/* <ul className='flex'>
//                 <li className='mr-10'><a href="/">Home</a></li>
//                 <li className='mr-10'><a href="/about">About</a></li>
//                 <li className='mr-10'><a href="/blog">Blog</a></li>
//             </ul> */}
//         </nav>
//         // (6)en then App.jsx file
//     );
// };

// export default NavBar;
// // (5)en

// -------------------------------End:34_2-(1) to (15) ---------------------------------------
// // -------------------------------Start: 34_3 ---------------------------------------

// import React, { useState } from 'react';
// import Link from './Link';
// import { Menu, X } from 'lucide-react';


// const navigationData = [
//     { id: 1, name: "Home", path: "/home" },
//     { id: 2, name: "About Us", path: "/about-us" },
//     { id: 3, name: "Services", path: "/services" },
//     { id: 4, name: "Blog", path: "/blog" },
//     { id: 5, name: "Contact", path: "/contact" }
// ];

// const NavBar = () => {
//     // (6)useState+enter
//     const [open, setOpen] = useState(false);

//     // (13)
//     const links = navigationData.map(route =><Link key={route.id} route={route}></Link>)
//     return (
//     //    (3)<nav className='flex justify-between mx-10'>
//         <nav className='flex justify-between mx-10'>
//             {/* (4) <Menu+enter*/}
//             {/* <Menu></Menu> */}
//             {/* (1) */}
//             {/* <h3>My Navbar</h3> */}
            
//             {/* (5)st-commit (4) and (1) and span*/}
//             {/* (8) onClick={() =>setOpen(!open)}*/}
//             <span className='flex' onClick={() =>setOpen(!open)}>
//                 {/* (7) */}
//                 {/* { open ? 'open' : 'close'} */}

//                 {/* (9)commit (7) <X+enter */}
//                 {/* { open ? <X></X> : 'close'} */}

//                 {/* (11)commit (9) */}
//                 { open ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>}
//                 {/* (10)commit <Menu */}
//                 {/* <Menu className='md:hidden'></Menu> */}

//                 {/* (15)st */}
//                 {/* (16)<ul className='md:hidden'> */}
//                 <ul className='md:hidden'>
//                     {links}
//                 </ul>
//                 {/* (15)en */}
//                 <h3 className='ml-4'>My Navbar</h3>
//             </span>
//             {/* (5)en */}
//             {/* (17)className='flex' convert to className='md: flex hidden'*/}
//             <ul className='md: flex hidden'>
//                 {
//                     // (12)commit it and copy to (13)
//                     // navigationData.map(route =><Link key={route.id} route={route}></Link>)
//                     // (14)
//                     links

//                 }
//             </ul>
          
//             {/* <ul className='flex'>
//                 {
//                     navigationData.map(route => <li className='mr-10'><a href={route.path}>{route.name}</a></li>)
//                 }
//             </ul> */}
           
//             {/* <ul className='flex'>
//                 <li className='mr-10'><a href="/">Home</a></li>
//                 <li className='mr-10'><a href="/about">About</a></li>
//                 <li className='mr-10'><a href="/blog">Blog</a></li>
//             </ul> */}

//             {/* (2) */}
//             <button>Sign In</button>

//         </nav>
       
//     );
// };

// export default NavBar;

// // -------------------------------End:34_3-(1) to (17) ---------------------------------------
// -------------------------------Start: 34_4 ---------------------------------------

import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';


const navigationData = [
    { id: 1, name: "Home", path: "/home" },
    { id: 2, name: "About Us", path: "/about-us" },
    { id: 3, name: "Services", path: "/services" },
    { id: 4, name: "Blog", path: "/blog" },
    { id: 5, name: "Contact", path: "/contact" }
];

const NavBar = () => {
    const [open, setOpen] = useState(false);
    const links = navigationData.map(route =><Link key={route.id} route={route}></Link>)
    return (
        // (2) text-black
        // (8)mt-4 then create PricingOptions.jsx file in PricingOptions folder in components folder
        <nav className='flex justify-between mx-10 mt-4 text-black'>
            <span className='flex' onClick={() =>setOpen(!open)}>
                { open ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>}
                {/* (1) className='md:hidden' convert to className='md:hidden absolute top-8 bg-amber-200' */}
                {/* (3) className={`md:hidden absolute top-8 bg-amber-200`}*/}
                {/* (4) className={`md:hidden absolute duration-1000 ${open ? 'top-8' : 'top-40'} bg-amber-200`}*/}
                {/* (5) className={`md:hidden absolute duration-1000 ${open ? 'top-8' : '-top-40'} bg-amber-200` then in Link.jsx}*/}
                <ul className={`md:hidden absolute duration-1000 ${open ? 'top-8' : '-top-40'} bg-amber-200`}>
                    {links}
                </ul>
                
                <h3 className='ml-4'>My Navbar</h3>
            </span>

            <ul className='md:flex hidden'>
                {
                    links
                }
            </ul>
          
            <button>Sign In</button>

        </nav>
       
    );
};

export default NavBar;

// -------------------------------End:34_4-(1) to () ---------------------------------------