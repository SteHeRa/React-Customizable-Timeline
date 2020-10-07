import React from 'react';
import { useSpring, animated, config } from 'react-spring';
import { ThemeProvider } from 'styled-components';
import { S_Timeline, S_Timeline_Phone } from './styles';
import { Item } from './Models/Item';
import TimelineSection from './TimelineSection';
import TimelineSectionPhone from './TimelineSectionPhone';

type Props = {
  animation?: boolean;
  data?: Item[];
  primaryDarkColor?: string;
  primaryLightColor?: string;
  primaryFont?: string;
  titleShape?: string;
  dotShape?: string;
  lineStyle?: string;
};

const Timeline: React.FC<Props> = ({
  animation = true,
  data,
  primaryDarkColor = '#625261',
  primaryLightColor = '#F5F5DC',
  primaryFont = "'Chivo', sans-serif",
  titleShape = 'circle',
  dotShape = 'circle',
  lineStyle = 'dotted',
}) => {
  const theme = {
    primaryDarkColor,
    primaryLightColor,
    primaryFont,
    titleShape,
    dotShape,
    lineStyle,
  };

  const lineAnimation: Object = useSpring({
    from: { transform: 'translate3d(-100%, 0, 0)' },
    to: { transform: 'translate3d(0, 0, 0)' },
    config: { mass: 2, tension: 120, friction: 24 },
    reset: animated,
  } as any);

  if (navigator.userAgent.match(/(iPhone|Android)/i) || window.innerWidth < 560) {
    return (
      <ThemeProvider theme={theme}>
        <animated.div style={animation ? lineAnimation : undefined}>
          <S_Timeline_Phone>
            {data?.map((item, index) => {
              return (
                <TimelineSectionPhone
                  key={index}
                  index={index}
                  animation={animation}
                  data={item}
                  primaryDarkColor={primaryDarkColor}
                  dotShape={dotShape}
                  lineStyle={lineStyle}
                />
              );
            })}
          </S_Timeline_Phone>
        </animated.div>
      </ThemeProvider>
    );
  } else
    return (
      <ThemeProvider theme={theme}>
        <animated.div style={animation ? lineAnimation : undefined}>
          <S_Timeline>
            {data?.map((item, index) => {
              return (
                <TimelineSection
                  key={index}
                  index={index}
                  animation={animation}
                  data={item}
                  primaryDarkColor={primaryDarkColor}
                  dotShape={dotShape}
                  lineStyle={lineStyle}
                />
              );
            })}
          </S_Timeline>
        </animated.div>
      </ThemeProvider>
    );
};

export default Timeline;
