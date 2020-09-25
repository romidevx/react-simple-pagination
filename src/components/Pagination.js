import React from 'react';
import '../App.css';

function Pagination({ start,end,setStart,setEnd,total}) {
    console.log('total: ',total);

    const goBack = () => {
        setStart(start - 5);
        setEnd(end - 5)
      }

      const goFoward = () => {
        setStart(start + 5);
        setEnd(end + 5)
      }


    return (
        <div className="pagination-container">
            <button onClick={goBack} disabled={start === 0} className={start === 0 ? 'invisible': '' }>&#10094;&nbsp; VOLTAR</button>
            <button onClick={goFoward} disabled={end === total} className={end === total ? 'invisible': '' }> PROXIMA &nbsp;&#10095;</button>
        </div>
    )
}

export default Pagination;
