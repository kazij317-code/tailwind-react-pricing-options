// // -------------------------------Start: 34_1 ---------------------------------------
// // (4)clear all
// import './App.css'

// function App() {


//   return (
//     <>
//       {/* (10) st-copy from daisUI responsive (dropdown menu on small screen, center menu on large screen)*/}
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><a>Item 1</a></li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><a>Item 1</a></li>
            <li>
              <details>
                <summary>Parent</summary>
                <ul className="p-2 bg-base-100 w-40 z-1">
                  <li><a>Submenu 1</a></li>
                  <li><a>Submenu 2</a></li>
                </ul>
              </details>
            </li>
            <li><a>Item 3</a></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>

//       {/* (10)-en */}

//       {/* (5)<h1 className='text-7xl underline'> */}
//       <h1 className='text-7xl underline'>Vite + React</h1>

//       {/* (11)copy from daisyUI : Hero with figure */}
//       <div className="hero bg-base-200 min-h-screen">
//         <div className="hero-content flex-col lg:flex-row">
//           <img
//             src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
//             className="max-w-sm rounded-lg shadow-2xl"
//           />
//           <div>
//             <h1 className="text-5xl font-bold">Box Office News!</h1>
//             <p className="py-6">
//               Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
//               quasi. In deleniti eaque aut repudiandae et a id nisi.
//             </p>
//             <button className="btn btn-primary">Get Started</button>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default App

// // -------------------------------End:34_1-(1) to (11) ---------------------------------------
// // -------------------------------Start: 34_2 ---------------------------------------

// import './App.css'
// import DaisyNav from './assets/components/DaisyNav/DaisyNav'
// import NavBar from './assets/components/DaisyNav/NavBar/NavBar'

// function App() {


//   return (
//     <>
//       {/* <h1 className='text-7xl underline'>Vite + React</h1> */}
      
//       <header>
//         {/* (7) Navbar+enter then in NavBar.jsx*/}
//         <NavBar></NavBar>
//         {/* (4) DaisyNav+Enter then create NavBar.jsx file in NavBar Folder in components Folder */}
//         {/* <DaisyNav></DaisyNav> */}
//       </header>
//       <main>

//       </main>
 
//     </>
//   )
// }

// export default App
// // (1)DaisyNav.jsx file in DaisyNav Folder in components Folder
// // -------------------------------End:34_2-(1) to (15) ---------------------------------------
// // -------------------------------Start: 34_5 ---------------------------------------

// import './App.css'
// import DaisyNav from './assets/components/DaisyNav/DaisyNav'
// import NavBar from './assets/components/DaisyNav/NavBar/NavBar'
// import { Suspense } from 'react'
// import PricingOptions from './assets/components/PricingOptions/PricingOptions'

// // (3)
// const pricingPromise = fetch('pricingData.json').then(res => res.json());

// function App() {

//   return (
//     <>
//       <header>
        
//         <NavBar></NavBar>
        
//       </header>
//       <main>
//         {/* (1)st- <Sus+enter */}
//         {/* (5) fallback={<span className="loading loading-spinner loading-lg"></span>} from Loading spinner from daisyUI*/}
//         <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
//             {/* (2) PricingOptions+enter*/}
//             {/* (4) pricingPromise={pricingPromise}*/}
//             <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
//         </Suspense>
//         {/* (1)en */}
//       </main>
 
//     </>
//   )
// }

// export default App

// // -------------------------------End:34_5-(1) to (25) ---------------------------------------
// -------------------------------Start: 34_7 ---------------------------------------

import './App.css'
import DaisyNav from './assets/components/DaisyNav/DaisyNav'
import NavBar from './assets/components/DaisyNav/NavBar/NavBar'
import { Suspense } from 'react'
import PricingOptions from './assets/components/PricingOptions/PricingOptions'
import ResultChart from './assets/components/ResultChart/ResultChart'


const pricingPromise = fetch('pricingData.json').then(res => res.json());

function App() {

  return (
    <>
      <header>
        
        <NavBar></NavBar>
        
      </header>
      <main>
        
        <Suspense fallback={<span className="loading loading-spinner loading-lg"></span>}>
            
            <PricingOptions pricingPromise={pricingPromise}></PricingOptions>
        </Suspense>
        {/* (1) then in ResultChart.jsx*/}
        <ResultChart></ResultChart>
      </main>
 
    </>
  )
}

export default App

// -------------------------------End:34_7-(1) to () ---------------------------------------
