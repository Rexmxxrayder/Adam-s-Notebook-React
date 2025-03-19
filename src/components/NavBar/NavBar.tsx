import React from 'react'
import NavbarSections from "../../constants/NavBar.ts"

const NavBar = () => {

    const sections = () => {
        return (
            <>
                {Object.values(NavbarSections).map((value, index) => (
                    <a href={value[1]} key={index} className="text-neutral-400 font-bold text-xl hover:text-white transition-colors">
                        {value[0]}
                    </a>
                ))}
            </>
        )
    }

    return (
        <header className='fixed top-0 left-0 right-0 z-50 bg-black/90'>
            <div className='max-w-7xl mx-auto'>
                <div className='flex justify-between items-center py-5 mx-auto c-space'>
                    {sections()}
                    <button>
                        <img src={"assets/menu.svg"} alt="toggle" className='w-6 h-6' />
                    </button>
                </div>
            </div>
        </header>
    )
}

export default NavBar