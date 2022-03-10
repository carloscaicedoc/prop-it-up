import React, {Component} from 'react';
import './App.css';
import PersonCard from './components/PersonCard';

function App() {
  return (
    <div className="App">
      <PersonCard
      lastName={"Simone"}
      firstName={"Nina"}
      age={39}
      hairColor={"Black"}
      location="Chicago"
      > 
      </PersonCard>
      <PersonCard
      lastName={"Wolf"}
      firstName={"Virginia"}
      age={33}
      hairColor={"Dark Brown"}   
      location="Berlin">
      </PersonCard>
      <PersonCard
      lastName={"Yourcenar"}
      firstName={"Marguerite"}
      age={48}
      hairColor={"Light Brown"}   
      location="Paris">
      </PersonCard>
      <PersonCard
      lastName={"Thurman"}
      firstName={"Uma"}
      age={52}
      hairColor={"Blonde"}   
      location="Los Angeles">
      </PersonCard> 
    </div>
  );
}
export default App;
