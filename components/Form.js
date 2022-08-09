import React from 'react'

const Form = () => {
    return (
        <div className='bg-white text-black w-2/5 m-auto shadow-2xl p-10'>
            <div className='flex justify-between items-center mb-10'>
                <span className='text-red text-lg font-bold text-slate-600 capitalize'>New contact</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-600 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
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
                    <textarea className='bg-slate-100 text-slate-600 pl-2 text-lg font-normal capitalize py-2 rounded focus:outline-none' rows="4" cols="50"></textarea>
                </div>
                <div className='form-group'>
                    <button className='capitalize'>save</button>
                    <button className='capitalize'>close</button>
                </div>

        </form>


        </div >
    )
}

export default Form