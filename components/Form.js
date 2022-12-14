import React, { useState } from 'react'


const Form = ({setClick}) => {

    return (
        <div className='bg-white text-black w-4/12 m-auto shadow-2xl p-10 h-full absolute top-1/2 left-1/2 z-50' style={{ transform: 'translate3d(-50%, -50%, 0)' }}>
            <div className='flex justify-between items-center mb-10'>
                <span className='text-red text-lg font-bold text-slate-600 capitalize'>New contact</span>
                <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setClick(prev => !prev)} className={'h-6 w-6 text-slate-600 cursor-pointer block'} viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </div>

            <form>
                <div className='form-group flex flex-col'>
                    <label for='name'>Name</label>
                    <input type='text' className='bg-slate-100 text-slate-600 pl-2 text-lg font-normal capitalize py-2 rounded focus:outline-none mb-5' />
                </div>
                <div className='form-group flex flex-col'>
                    <label for='phone'>Phone</label>
                    <input type='text' className='bg-slate-100 text-slate-600 pl-2 text-lg font-normal capitalize py-2 rounded focus:outline-none mb-5' />
                </div>
                <div className='form-group flex flex-col'>
                    <label for='email'>Email</label>
                    <input type='email' className='bg-slate-100 text-slate-600 pl-2 text-lg font-normal capitalize py-2 rounded focus:outline-none mb-5' />
                </div>
                <div className='form-group flex flex-col'>
                    <label for='address'>Address</label>
                    <input type='text' className='bg-slate-100 text-slate-600 pl-2 text-lg font-normal capitalize py-2 rounded focus:outline-none mb-5' />
                </div>
                <div className='form-group flex'>
                    <button className='capitalize bg-blue-600 text-white px-3 py-2'>save</button>
                    <button className='capitalize'>close</button>
                </div>

            </form>


        </div >
    )
}

export default Form