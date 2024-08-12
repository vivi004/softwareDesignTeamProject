// import { BrowserRouter, Routes ,Route} from 'react-router-dom'
// import Weblayout from './layout/Weblayout'
// import Home from './pages/Web/Home'
// import Login from './pages/Web/Login'
// import Notfound from './pages/Web/Notfound'
// import Register from './pages/Web/Register'

// const App = () => {
//   return (
//     <div>
//         <BrowserRouter>
//         <Routes>
//             <Route element={<Weblayout/>}>
//             <Route path='/' element={<Home/>}/>
//             <Route path='/login' element={<Login/>}/>
//             <Route path='/register' element={<Register/>}/>
//             <Route path='*' element={<Notfound/>}/>
//             </Route>
//         </Routes>
//         </BrowserRouter>

//     </div>
//   )
// }
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Weblayout from './layout/Weblayout'
import Home from './pages/Web/Home'
import Login from './pages/Web/Login'
import Notfound from './pages/Web/Notfound'
import Register from './pages/Web/Register'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route element ={<Weblayout/>}>
        <Route path='/' element ={<Home/>}/>
        <Route path='/login' element ={<Login/>}/>
        <Route path='/register' element ={<Register/>}/>
        <Route path='*' element ={<Notfound/>}/>
        </Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default App