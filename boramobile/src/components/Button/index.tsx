import React from 'react';
import { RectButtonProperties } from 'react-native-gesture-handler';

import { Container, ButtonText, IconContainer, Icon } from './styles';

interface ButtonProps extends RectButtonProperties {
    children?: string;
    icon: string;
}

const Button: React.FC<ButtonProps> = ({ icon, children, ...rest }) => {
    return (
      <Container {...rest}>
        <IconContainer>
          <Icon name={icon} size={20} color="#fff" />
        </IconContainer>
        <ButtonText>{children}</ButtonText>
      </Container>
    );
};

export default Button;