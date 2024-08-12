
// const Weblayout = () => {
//   const Navbar =()=>{
//     const LinksData=[
//       {
//         title:'Home',
//         link:'/'
//       },
//       {
//         title:'Login',
//         link:'/Login'
//       },
//       {
//         title:'Register',




//         link:'/Register'
//       }
//     ]
//   }
//   return (
//     <div className='w-full h-[Bvh] flex flex-row justify-center items-center border-b-2 border-primary'>
//         <div className='h-full w-1/4 flex flex-row justify-center items-center text-2xl font-bold'>
//         Logo
//         </div>
//         <div className='h-full w-3/4 flex flex-row justify-center items-center'>{
//         LinksData.map((data, index) =>(
//           <li key={index} className='list-none'>
//             <NavLink to={data.link}>
//               {data.title}
//             </NavLink>
//           </li>
//         ))
//       }
//         </div>
//     </div>
//   )
// }

// export default Weblayout
import Footer from '@/components/Web/Footer'
import Navbar from '@/components/Web/Navbar'
import { Outlet } from 'react-router-dom'

const Weblayout = () => {
  return (
    <div className='h-screen w-screen overflow-hidden overflow-y-auto m-0 p-0'>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Weblayout