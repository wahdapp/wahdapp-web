import styled from 'styled-components';
import {
  space,
  SpaceProps,
  flexbox,
  FlexboxProps,
  LayoutProps,
  layout,
  ColorProps,
  color,
  PositionProps,
  position,
} from 'styled-system';

type Props = FlexboxProps &
  SpaceProps &
  LayoutProps &
  ColorProps &
  PositionProps;

const Flex = styled.div<Props>`
  display: flex;
  ${flexbox}
  ${space}
  ${layout}
  ${color}
  ${position}
`;

export default Flex;
