import React from 'react'
import Table from './Table';
// import Table from './Table'

const MainContent = () => {
  return (
    <>
      <header className='flex justify-between items-center pb-10'>
          <h3 className='text-lg text-slate-600 uppercase'>All contacts (11)</h3>
          <button className='bg-slate-600 text-white text-sm rounded font-normal uppercase py-2 px-5'>new contact</button>
      </header>
      <div className='flex justify-between items-center'>
        <input type='text' placeholder='search contacts' className='border-2 border-slate-600 text-slate-600 pl-2 text-sm capitalize py-2 rounded'/>
        <span className='text-sm text-slate-600 capitalize'>per page</span>
      </div>
      <Table />
    </>
  )
}

export default MainContent;