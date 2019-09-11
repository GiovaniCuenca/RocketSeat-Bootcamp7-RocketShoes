import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Wrapper, Container, Logo, ItemCount, BasketContainer } from './styles';

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <Logo />
        <BasketContainer>
          <Icon name="shopping-basket" size={30} color="#FFF" />
          <ItemCount>3</ItemCount>
        </BasketContainer>
      </Container>
    </Wrapper>
  );
}
