import React from 'react';
import { ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as CartActions from '../../store/modules/cart/actions';

import { formatPrice } from '../../util/format';
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
  EmptyContainer,
  EmptyText,
} from './styles';

function Cart({ navigation }) {
  const products = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    }))
  );

  const totalPrice = useSelector(state =>
    formatPrice(
      state.cart.reduce(
        (total, product) => total + product.price * product.amount,
        0
      )
    )
  );

  const dispatch = useDispatch();

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  return (
    <ScrollView>
      <Container>
        {products.length ? (
          <>
            <Products>
              {products.map(product => (
                <Product key={product.id}>
                  <ProductInfo>
                    <ProductImage source={{ uri: product.image }} />
                    <ProductDetails>
                      <ProductTitle>{product.title}</ProductTitle>
                      <ProductPrice>{formatPrice(product.price)}</ProductPrice>
                    </ProductDetails>
                    <ProductDelete
                      onPress={() =>
                        dispatch(CartActions.removeFromCart(product.id))
                      }
                    >
                      <Icon name="delete-forever" size={25} color="#06CCA1" />
                    </ProductDelete>
                  </ProductInfo>
                  <ProductControls>
                    <ProductControlButton onPress={() => decrement(product)}>
                      <Icon
                        name="remove-circle-outline"
                        size={22}
                        color="#06CCA1"
                      />
                    </ProductControlButton>
                    <ProductAmount value={String(product.amount)} />
                    <ProductControlButton onPress={() => increment(product)}>
                      <Icon
                        name="add-circle-outline"
                        size={22}
                        color="#06CCA1"
                      />
                    </ProductControlButton>
                    <ProductSubtotal>{product.subtotal}</ProductSubtotal>
                  </ProductControls>
                </Product>
              ))}
            </Products>
            <TotalContainer>
              <TotalText>TOTAL</TotalText>
              <TotalAmount>{totalPrice}</TotalAmount>
              <Order>
                <OrderText>Finalizar Pedido</OrderText>
              </Order>
            </TotalContainer>
          </>
        ) : (
          <EmptyContainer>
            <Icon name="remove-shopping-cart" size={64} color="#eee" />
            <EmptyText>Seu carrinho está vazio</EmptyText>
          </EmptyContainer>
        )}
      </Container>
    </ScrollView>
  );
}

export default Cart;
