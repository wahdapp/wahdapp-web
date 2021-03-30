import { ReactNode } from 'react';
import styled from 'styled-components';
import {
  SpaceProps,
  LayoutProps,
  TypographyProps,
  FlexboxProps,
  space,
  layout,
  typography,
  flexbox,
} from 'styled-system';
import memo from 'helpers/memo';

type ButtonProps = React.HTMLAttributes<HTMLButtonElement> &
  SpaceProps &
  LayoutProps &
  TypographyProps &
  FlexboxProps & {
    children: ReactNode;
    disabled?: boolean;
  };

const ButtonStyle = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.6s;
  -webkit-appearance: none;
  width: 320px;
  height: 72px;
  border-radius: 12px;
  background-image: linear-gradient(115deg, #6dc7b0, #78c8ef 102%);
  font-size: 24px;
  font-weight: bold;
  line-height: 1.5;
  text-align: center;
  color: #ffffff;
  font-family: 'Sen', sans-serif;

  &:hover {
    box-shadow: 0 8px 40px 0 #12967a;
    transform: translateY(-5px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 8px 40px 0 #12967a;
  }

  @media screen and (max-width: 1024px) {
    width: 100%;
  }

  ${space}
  ${layout}
  ${typography}
  ${flexbox}
`;

const ButtonComponent: React.FC<ButtonProps> = ({ children, ...props }) => {
  return <ButtonStyle {...props}>{children}</ButtonStyle>;
};

export default memo(ButtonComponent);
