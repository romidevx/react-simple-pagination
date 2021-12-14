import React,{useState} from 'react';
import './App.css';

// COMPONENTS
import Pagination from './components/Pagination';

// MOCK DATA
import {data} from './data/data';

function App() {

  const [posts] = useState(data);
  const [start,setStart] = useState(0);
  const [end,setEnd] = useState(5);
  console.clear();
  console.log('start: ',start);
  console.log('end: ',end);
  const total = posts.length;

  return (
    <div className="app-container">

      <h3>Simple data pagination</h3>
      
      {  
      end === total 
      ? <h4>No more Posts...</h4>
      : posts.slice(start,end).map( post => 
            <div className="info">
                <p key={post.id}>{post.title}</p>
                <p>{post.body}</p>
            </div> 
        )
      }

      <Pagination 
        start={start} 
        end={end} 
        setStart={setStart} 
        setEnd={setEnd} 
        total={total} 
      />
    </div>
  );
}

export default App;
