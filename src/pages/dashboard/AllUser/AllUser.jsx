import React from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import UsersTable from './UsersTable';

const AllUser = () => {
    const axiosSecure = useAxiosSecure()
      
     const {refetch, data : users = []} = useQuery({
        queryKey : ['users'],
        queryFn : async() => {
           const res = await axiosSecure.get('/users')
           return res.data;
        }
     })


    return (
        <div>
            <div className="flex justify-around my-6 items-center">
            <h2 className='text-2xl font-bold'>All User are here</h2>
        <h2 className="text-2xl font-bold">Total Users : <span className="text-orange-400">{users.length}</span></h2>
        
      </div>

      {/* table */}
      <div className="px-2 md:px-28 my-4">
        <table className="table">
          <thead>
            <tr className="bg-orange-400 text-white">
              <th>
                <h2>Serial</h2>
              </th>
              <th>Item imge</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
           {
            users.map((user,index) => <UsersTable
            refetch={refetch}
            key={user._id}
            user={user}
            index={index}
            ></UsersTable>)
           }
          </tbody>
        </table>
      </div>
        </div>
    );
};

export default AllUser;