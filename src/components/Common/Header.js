import React, {Component} from 'react';
import {RefreshIcon} from '@heroicons/react/outline'

class Header extends Component{
    render(){
        return(
        <header className='flex justify-between items-center mb-4 pb-2 '> 
            <div className='flex items-center'>
                <div>
                    <h1 className='mr-5 text-lg'>User Profile Lists</h1>
                    <p className='mr-5 text-md opacity-50'>Mini Projects</p>
                </div>
            </div>
            <nav className='flex flex-row items-center cursor-pointer'>
                <RefreshIcon className='w-4 h-4 mr-3'/>
                <button>load another data</button>
            </nav>
        </header>
        )
    }
}

export default Header