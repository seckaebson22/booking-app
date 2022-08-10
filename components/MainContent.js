import React, {useState} from 'react'
import Form from './Form';
import Table from './Table';

const MainContent = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(prev => !prev);
  }

  return (
    <>
      <header className='flex justify-between items-center pb-10'>
        <h3 className='text-2xl font-normal text-slate-600 uppercase font-sans '>All contacts (11)</h3>
        <div onClick={handleClick} className='text-lg bg-slate-600 text-white text-sm font-sans rounded font-semibold uppercase py-3 px-10 cursor-pointer'>new contact</div>
      </header>
      <div className='bg-pink-200 flex justify-between items-center px-5 py-5 mb-5'>
        <span className='text-red text-lg font-normal text-slate-600'>Contact deleted! You have successfully deleted the contact.</span>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-600 cursor-pointer" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      </div>
      <form className='flex justify-between items-center mb-5'>
        <div className='form-group'>
          <input type='text' placeholder='search contacts' className='bg-slate-100 text-slate-600 pl-2 text-lg font-normal capitalize py-2 rounded focus:outline-none' />
        </div>
        <div className='form-group'>
          <label for="cars" className='capitalize text-lg font-bold text-slate-300 mr-2'>per page:</label>
          <select id="cars" name="cars" className='bg-slate-100 text-slate-600 text-lg font-normal capitalize px-5 py-2 rounded focus:outline-none'>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
      </form>

      {/* Table component */}
      <Table />

      {/* Form Component */}

      {
        click && (
          <Form setClick={setClick} />
        )
      }
  
    </>
  )
}

export default MainContent;