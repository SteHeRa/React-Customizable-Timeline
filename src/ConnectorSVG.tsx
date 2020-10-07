import React from 'react';

type SVGProps = {
  dotShape: string;
  lineStyle: string;
  color: string;
};

const ConnectorSVG: React.FC<SVGProps> = ({ dotShape, lineStyle, color }) => {
  const lineStyleSelector = (style: string) => {
    switch (style) {
      case 'solid':
        return <line x1="50%" y1="10" x2="50%" y2="90" stroke={color} strokeWidth="1px" />;
      case 'dotted':
        return (
          <line
            x1="50%"
            y1="10"
            x2="50%"
            y2="90"
            stroke={color}
            strokeWidth="2px"
            strokeDasharray="0,4"
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
            stroke={color}
            strokeWidth="2px"
            strokeDasharray="4,2.2"
          />
        );
      case 'hidden':
        return null;
    }
  };

  const dotShapeSelector = (shape: string) => {
    switch (shape) {
      case 'circle':
        return <circle cx="50" cy="50" r="8" fill={color} />;
      case 'square':
        return <rect x="50" y="50" width="12" height="12" fill={color} />;
      case 'diamond':
        return <polygon points="50,42 58,50 50,58 42,50" fill={color} />;
      case 'line':
        return <line x1="46" y1="50" x2="54" y2="50" stroke={color} strokeWidth="1.5" />;
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
