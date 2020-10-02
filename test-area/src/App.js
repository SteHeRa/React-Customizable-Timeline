import React from 'react';
import './App.css';

import Timeline from './TimelineComponent/Timeline';

function App() {
  const data = [
    {
      title: 'TITLE 1',
      events: [
        {
          title: 'EVENT TITLE',
          subtitle: 'EVENT SUBTITLE',
          content: 'CONTENT',
          location: 'LOCATION',
          label: '#LABLE1 #LABLE2',
          img: {
            url:
              'https://images.unsplash.com/photo-1600790078201-5490baf711d6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
            alt: 'pic',
          },
        },
      ],
    },
  ];

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
