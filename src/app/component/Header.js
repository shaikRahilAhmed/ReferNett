import React from 'react'
import Nav from '@/app/component/Nav'


const Header = () => {
    return (

        <header className="w-full flex justify-between items-center py-4 px-6 bg-white/70 backdrop-blur-md shadow-md sticky top-0 z-50 rounded-xl">
            <div className="flex items-center gap-2">
                <svg
                    xmlns="http://www .w3.org/2000/svg"
                    className="w-8 h-8 text-blue-500"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                >
                    <path d="M12 2L2 7v7c0 5 4 9 10 9s10-4 10-9V7l-10-5z" />
                </svg>
                <h1 className="text-2xl font-bold  text-blue-500 tracking-tight">ReferNet</h1>
            </div>
            <Nav />

        </header>


    )
}

export default Header
