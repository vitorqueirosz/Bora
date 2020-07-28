import React from 'react';

import { Container } from './styles';

interface ToolTipProps {
    title: string;
    className?: string;
}

const ToolTip: React.FC<ToolTipProps> = ({ title, className, children }) => (
  <Container className={className}>
    {children}
    <span>{title}</span>
  </Container>
);

export default ToolTip;
