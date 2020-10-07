import React from 'react';

type SVGProps = {
  dotShape: string;
  lineStyle: string;
};

const ConnectorSVG: React.FC<SVGProps> = ({ dotShape = 'circle', lineStyle = 'dotted' }) => {
  // let points: string = '50,42 58,50 50,58 42,50';
  // let fill: string = 'black;';

  const dotShapeSelector = (shape: string) => {
    switch (shape) {
      case 'circle':
        return <circle cx="50" cy="50" r="8" fill="black" />;
      case 'square':
        return <rect x="50" y="50" width="12" height="12" />;
      case 'diamond':
        return <polygon points="50,42 58,50 50,58 42,50" fill="black" />;
      case 'line':
        return <line x1="46" y1="50" x2="54" y2="50" stroke="black" strokeWidth="1.5" />;
    }
  };

  const lineStyleSelector = (style: string) => {
    switch (style) {
      case 'solid':
        return <line x1="50%" y1="10" x2="50%" y2="90" stroke="black" strokeWidth="1px" />;
      case 'dotted':
        return (
          <line
            x1="50%"
            y1="10"
            x2="50%"
            y2="90"
            stroke="black"
            strokeWidth="2px"
            stroke-dasharray="0,4"
            strokeLinecap="round"
          />
        );
      case 'dashed':
        return (
          <line
            x1="50%"
            y1="10"
            x2="50%"
            y2="90"
            stroke="black"
            strokeWidth="2px"
            stroke-dasharray="4,2.2"
          />
        );
      case 'hidden':
        return null;
    }
  };

  return (
    <svg width="100%" height="100%" viewBox="0 0 100 100">
      {lineStyleSelector(lineStyle)}
      {dotShapeSelector(dotShape)}
    </svg>
  );
};

export default ConnectorSVG;
