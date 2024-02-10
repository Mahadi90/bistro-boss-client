import React from 'react';

const Pazinaton = ( {totalItems, itemsperPage, setCurrentPage, currentpage} ) => {
let pages = [];

for(let i = 1; i <= Math.ceil(totalItems / itemsperPage); i++){
    pages.push(i)
}
// console.log(pages)
  

    return (
        <div className='my-4 text-center space-x-1'>
            <button onClick={() => setCurrentPage(currentpage -1 )} className={`btn btn-primary text-2xl hover:btn-ghost ${pages < 2 && 'btn-disabled'}`}>Prev</button>
           {
            pages.map((page, index) => <button onClick={() => setCurrentPage(page)} key={page} className='btn btn-primary text-2xl after:active:btn-ghost hover:btn-ghost'>{page}</button>)
           }
           <button onClick={() => setCurrentPage(currentpage +1 )} className={`btn btn-primary text-2xl hover:btn-ghost ${pages < 2 && 'btn-disabled'}`}>Next</button>
        </div>
    );
};

export default Pazinaton;