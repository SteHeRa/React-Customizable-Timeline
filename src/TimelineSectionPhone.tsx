import React from 'react';

import { S_TimelineSection_Phone, S_Title_Phone, S_TimelineConnector_Phone } from './styles';
import { useSpring, animated, config } from 'react-spring';
import { Item } from './Models/Item';
import { Fade } from 'react-awesome-reveal';

import TimelineItemPhone from './TimelineItemPhone';
import ConnectorSVG from './ConnectorSVG';

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

const TimelineSectionPhone: React.FC<SectionProps> = ({
  index,
  animation = true,
  data,
  primaryDarkColor = '#625261',
  dotShape = 'circle',
  lineStyle = 'dotted',
}) => {
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
    <S_TimelineSection_Phone data-testid={'timelineSection'}>
      <animated.div style={animation ? titleAnimation : undefined}>
        <S_Title_Phone>
          <div>{data.title}</div>
        </S_Title_Phone>
      </animated.div>
      {data.events.map((event, index) => {
        let timelineItemIndex = index;
        if (timelineItemIndex === data.events.length - 1) {
          return (
            <Fade key={index}>
              <TimelineItemPhone
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
        } else {
          return (
            <Fade key={index}>
              <TimelineItemPhone
                title={event.title}
                subtitle={event.subtitle}
                content={event.content}
                img={event.img}
                label={event.label}
                location={event.location}
                animation={animation}
              />
              <S_TimelineConnector_Phone className="timeline-connector">
                <ConnectorSVG dotShape={dotShape} lineStyle={lineStyle} color={primaryDarkColor} />
              </S_TimelineConnector_Phone>
            </Fade>
          );
        }
      })}
    </S_TimelineSection_Phone>
  );
};

export default TimelineSectionPhone;
