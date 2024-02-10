import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const CartTable = ({item, index, prefetch}) => {

    const axiosSecure = useAxiosSecure()

    const {image, name, price, _id} = item;

    const handleDelete = id => {
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
                axiosSecure.delete(`/carts/${id}`)
                .then(res => {
                 if(res.data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                      prefetch()
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
                <img className='w-16 h-16 rounded' src={image} alt="img" />   
        </td>
        <td>
        <h2>{name}</h2>
        </td>
        <td>${price}</td>
        <th>
          <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs"><FaTrashAlt className='h-6 w-6 text-red-600'></FaTrashAlt></button>
        </th>
      </tr>
    );
};

export default CartTable;