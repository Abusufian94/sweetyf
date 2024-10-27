import React from 'react'
import Sidebar from './Sidebar'
import Dashboard from './Dashboard'
import AdminHeader from './Layouts/admin/AdminHeaderbkp'

const Body = () => {
  return (
    <div className='flex'>
        <Sidebar/>
        <div>
        <AdminHeader/>
        <Dashboard/>

        </div>

      
    </div>
  )
}

export default Body
