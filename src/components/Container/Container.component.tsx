import { ReactNode } from 'react';
import { ContainerWrapper } from './Container.styled';

type IContainerProps = {
  children: ReactNode;
};

const Container = ({ children, ...otherProps }: IContainerProps) => {
  return <ContainerWrapper {...otherProps}>{children}</ContainerWrapper>;
};

export default Container;
