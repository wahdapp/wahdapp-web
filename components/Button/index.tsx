import { CSSProperties, memo } from 'react';

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  children: JSX.Element | string;
  style?: CSSProperties;
}

const ButtonComponent: React.FC<Props> = ({ children, ...props }) => {
  return (
    <button className={`wahdapp-btn ${props.className ?? ''}`} {...props}>
      {children}
    </button>
  );
};

export default memo(ButtonComponent);
