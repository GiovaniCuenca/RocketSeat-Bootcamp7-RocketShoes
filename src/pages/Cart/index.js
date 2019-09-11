import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Products,
  Product,
  ProductInfo,
  ProductImage,
  ProductDetails,
  ProductTitle,
  ProductPrice,
  ProductDelete,
  ProductControls,
  ProductControlButton,
  ProductAmount,
  ProductSubtotal,
  TotalContainer,
  TotalText,
  TotalAmount,
  Order,
  OrderText,
} from './styles';

export default function Cart() {
  return (
    <Container>
      <Products>
        <Product>
          <ProductInfo>
            <ProductImage
              source={{
                uri:
                  'https://static.netshoes.com.br/produtos/tenis-de-caminhada-leve-confortavel/06/E74-0492-006/E74-0492-006_detalhe2.jpg',
              }}
            />
            <ProductDetails>
              <ProductTitle>
                Tênis Teste - RocketShoes versão Mobile com React Native
              </ProductTitle>
              <ProductPrice>R$ 129,90</ProductPrice>
            </ProductDetails>
            <ProductDelete>
              <Icon name="delete-forever" size={25} color="#06CCA1" />
            </ProductDelete>
          </ProductInfo>
          <ProductControls>
            <ProductControlButton>
              <Icon name="remove-circle-outline" size={22} color="#06CCA1" />
            </ProductControlButton>
            <ProductAmount>2</ProductAmount>
            <ProductControlButton>
              <Icon name="add-circle-outline" size={22} color="#06CCA1" />
            </ProductControlButton>
            <ProductSubtotal>R$ 129,90</ProductSubtotal>
          </ProductControls>
        </Product>
      </Products>
      <TotalContainer>
        <TotalText>TOTAL</TotalText>
        <TotalAmount>R$ 258,80</TotalAmount>
        <Order>
          <OrderText>Finalizar Pedido</OrderText>
        </Order>
      </TotalContainer>
    </Container>
  );
}
