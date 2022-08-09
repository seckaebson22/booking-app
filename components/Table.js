import React from 'react'

const data = [
    {
        id: 1,
        name: 'Ebrima Secka 1',
        job: 'Web Developer',
        email: 'seckaebson22@gmail.com',
        address: 'Tallinding',
    },
    {
        id: 2,
        name: 'Ebrima Secka 2',
        job: 'Web Developer',
        email: 'seckaebson22@gmail.com',
        address: 'Tallinding',
    },
    {
        id: 3,
        name: 'Ebrima Secka 3',
        job: 'Web Developer',
        email: 'seckaebson22@gmail.com',
        address: 'Tallinding',
    },
    {
        id: 4,
        name: 'Ebrima Secka 4',
        job: 'Web Developer',
        email: 'seckaebson22@gmail.com',
        address: 'Tallinding',
    }
]

const Table = () => {
    return (
        <div className='overflow-x-auto'>
            <table className='w-full shadow-2xl'>
                <thead>
                    <tr className='font-sans border-b-2 border-slate-600 text-slate-600 text-left text-sm uppercase my-5'>
                        <th className='py-2'><input className='mr-2' type='checkbox' />Name</th>
                        <th>Job</th>
                        <th>email</th>
                        <th>address</th>
                        <th colSpan='2'>actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(({ name, job, email, address, index }) => {
                            return (
                                <tr className='shadow-lg text-slate-500 text-sm ' key={index}>
                                    <td className='py-5 flex items-center'><input className='mr-2' type='checkbox' />{name}</td>
                                    <td>{job}</td>
                                    <td>{email}</td>
                                    <td>{address}</td>
                                    <td colSpan='2'><button className='bg-blue-600 px-5 py-2 rounded text-white capitalize mr-2'>edit</button> <button className='bg-red-600 px-5 py-2 rounded text-white capitalize'>delete</button></td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Table