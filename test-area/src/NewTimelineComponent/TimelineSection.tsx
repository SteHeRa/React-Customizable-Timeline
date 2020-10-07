import React from 'react';

import { S_TimelineSection, S_Title } from './styles';
import { useSpring, animated, config } from 'react-spring';
import { Item } from './Models/Item';
import { Fade } from 'react-awesome-reveal';

import TimelineItem from './TimelineItem';

type SectionProps = {
  index: number;
  animation?: boolean;
  data: Item;
  primaryDarkColor?: string;
  primaryLightColor?: string;
  primaryFont?: string;
  titleShape?: string;
  dotShape?: string;
  lineStyle?: string;
};

const TimelineSection: React.FC<SectionProps> = ({ index, animation = true, data }) => {
  const titleAnimation: Object = useSpring({
    from: {
      transform: `translate3d(0, -4px, 0) scaleY(1.02)`,
    },
    to: {
      transform: 'translate3d(0, 0, 0) scaleY(1.02)',
    },
    config: config.wobbly,
  });

  return (
    <S_TimelineSection data-testid={'timelineSection'}>
      <animated.div style={animation ? titleAnimation : undefined}>
        <S_Title>
          <div>{data.title}</div>
        </S_Title>
      </animated.div>
      {data.events.map((event, index) => {
        return (
          <Fade key={index}>
            <TimelineItem
              title={event.title}
              subtitle={event.subtitle}
              content={event.content}
              img={event.img}
              label={event.label}
              location={event.location}
              animation={animation}
            />
          </Fade>
        );
      })}
    </S_TimelineSection>
  );
};

export default TimelineSection;
