import styled from 'styled-components';
import {
  space,
  SpaceProps,
  LayoutProps,
  layout,
  ColorProps,
  color,
  PositionProps,
  position,
  background,
  BackgroundProps,
} from 'styled-system';

type Props = SpaceProps &
  LayoutProps &
  ColorProps &
  PositionProps &
  BackgroundProps;

const Box = styled.div<Props>`
  ${space}
  ${layout}
  ${color}
  ${position}
  ${background}
`;

export default Box;
