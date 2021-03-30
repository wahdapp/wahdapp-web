import styled from 'styled-components';
import {
  color,
  ColorProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
  textShadow,
  TextShadowProps,
} from 'styled-system';

type Props = ColorProps & SpaceProps & TypographyProps & TextShadowProps;

export const H1 = styled.h1<Props>`
  font-weight: bold;
  font-size: 54px;
  letter-spacing: 1px;
  color: #ffffff;

  ${color}
  ${space}
  ${typography}
  ${textShadow}
`;

export const H2 = styled.h2<Props>`
  font-weight: bold;
  font-size: 28px;
  letter-spacing: 1px;
  color: #ffffff;

  ${color}
  ${space}
  ${typography}
  ${textShadow}
`;

export const H3 = styled.h3<Props>`
  font-weight: bold;
  font-size: 22px;
  letter-spacing: 1px;
  color: #ffffff;
  ${color}
  ${space}
  ${typography}
  ${textShadow}
`;

export const H4 = styled.h4<Props>`
  font-weight: bold;
  font-size: 18px;
  letter-spacing: 1px;
  color: #ffffff;
  ${color}
  ${space}
  ${typography}
  ${textShadow}
`;

export const H5 = styled.h5<Props>`
  font-weight: bold;
  font-size: 16px;
  letter-spacing: 1px;
  color: #ffffff;
  ${color}
  ${space}
  ${typography}
  ${textShadow}
`;

export const P = styled.p<Props>`
  font-size: 12px;
  letter-spacing: 1px;
  color: #ffffff;
  ${color}
  ${space}
  ${typography}
  ${textShadow}
`;

export const B = styled.b<Props>`
  font-weight: bold;
  font-size: 12px;
  letter-spacing: 1px;
  ${color}
  ${space}
  ${typography}
  ${textShadow}
`;
