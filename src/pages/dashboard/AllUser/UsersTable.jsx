import React from 'react';
import { FaTrashAlt, FaUsers } from 'react-icons/fa';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const UsersTable = ({index,user, refetch}) => {

    const axiosSecure = useAxiosSecure()

  const handleDeleteUser = id => {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        if (result.isConfirmed) {
            axiosSecure.delete(`/users/${id}`)
            .then(res => {
             if(res.data.deletedCount > 0){
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                  refetch()
             }
            })
        }
      });
  }

    return (
        <tr>
        <th>
        <h2>{index + 1}</h2>
        </th>
        <td>
        <h2>{user.name}</h2>
        </td>
        <td>{user.email}</td>
        <td>
        <button  className="btn btn-xs bg-orange-400 text-white h-10 hover:text-orange-400"><FaUsers className='h-6 w-6'></FaUsers></button>   
        </td>
        <th>
          <div>
          <button onClick={() => handleDeleteUser(user._id)}  className="btn btn-ghost btn-xs h-10"><FaTrashAlt className='h-6 w-6 text-red-600'></FaTrashAlt></button>
          </div>
        </th>
      </tr>
    );
};

export default UsersTable;