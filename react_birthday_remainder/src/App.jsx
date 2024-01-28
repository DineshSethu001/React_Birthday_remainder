import React,{useState} from 'react';
import './App.css';
import data from './data/data';
import List from './components/List';


export default function App(){
  const [people,setPeople]=useState(data)

  function clearAllRecords(){
      setPeople([]);
  }
  return(
  <main>
      <section className="container">
      <h3>{people.length} birthdays today</h3>
			<List people={people} />
      <button onClick={clearAllRecords}>Clear All</button>

    </section>
  </main>
  )
}