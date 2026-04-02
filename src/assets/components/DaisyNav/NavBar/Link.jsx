// // -------------------------------Start: 34_2 ---------------------------------------

// // (11)st-rsc+enter and div convert to li make a then in NavBar.jsx
// import React from 'react';
// // (13) const Link = ({route})
// const Link = ({ route }) => {
//     return (
//         <li className='mr-10'>
//             {/* (14) <a href="{route.path}">{route.name}</a>*/}
//             <a href={route.path}>{route.name}</a>
//         </li>
//     );
// };

// export default Link;
// // (11)en

// // (15) lucide react icons -->Guide-->Installation-->React-->npm-->copy in cmd:npm install lucide-react@next

// // -------------------------------End:34_2-(1) to (15) ---------------------------------------
// -------------------------------Start: 34_4 ---------------------------------------


import React from 'react';

const Link = ({ route }) => {
    return (
        // (6) className='mr-10' convert to className='px-4 mr-10 hover:bg-amber-400'
        // (7) <li className='px-4 lg:mr-10 hover:bg-amber-400'>
        <li className='px-4 lg:mr-10 hover:bg-amber-400'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};

export default Link;

// -------------------------------End:34_4-(1) to () ---------------------------------------