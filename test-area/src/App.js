import React from 'react';
import './App.css';
import data from './data'

import Timeline from './TimelineComponent/Timeline';

function App() {

  return (
    <div className="App">
      <Timeline
        data={data}
        primaryDarkColor="black"
        primaryLightColor="white"
        titleShape="circle"
        dotShape="diamond"
        lineStyle="dotted"
        primaryFont="monospace"
        animation={true}
      />
    </div>
  );
}

export default App;
