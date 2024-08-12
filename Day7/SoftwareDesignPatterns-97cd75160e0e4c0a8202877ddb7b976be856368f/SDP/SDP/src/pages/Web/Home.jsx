import GridPattern from '@/components/magicui/animated-grid-pattern'
import React from 'react'
import { cn } from "@/lib/utils";
import { BorderBeam } from '@/components/magicui/border-beam';
import { NavLink } from 'react-router-dom';
const Home = () => {
        const NavLinks = [
            {
              title: "NEW ARRIVALS",
              path: "/NEW ARRIVALS"

            },
            {
              title: "WESTERN",
              path: "/WESTERN"
            },
            {
              title: "ETHNIC",
              path: "/ETHNIC"
            },
            {
              title: "ACCESSORIES",
              path: "/ACCESSORIES"
            },
            {
                title:"MENS COLLECTION",
                path:"MENS COLLECTION"
            }
          ]
          
    return (
<div className="w-full h-[9vh] flex flex-row justify-center items-center shadow-sm shadow-primary/50">
    <div className='w-5/4 h-full font-bold flex flex-row justify-end items-center gap-12'>


    
      {
        NavLinks.map((links, index) => (
          <li key={index} className='list-none'>
            <NavLink to={links.path}>
              {links.title}
            </NavLink>
            
          </li>
        ))
    }
    </div>
    </div>
    )
}

export default Home
