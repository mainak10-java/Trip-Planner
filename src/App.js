
import { useState } from 'react';
import data from './data';
import Tour from './components/Tour';

function App() {
  const [tours,setTours]=useState(data);

  function removeTour(id){
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  if(tours.length === 0){
    return( <div className="refresh">
    <h2>No Tours left</h2>
    <button onClick={() => setTours(data)} className="btn-white">
      Refresh
    </button>
  </div>);
  }
  return (
    <div className='App'>
      <Tour tours={tours} removeTour={removeTour}></Tour>
    </div>
  );
}

export default App;
