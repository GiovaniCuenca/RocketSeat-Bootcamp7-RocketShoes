import styled from 'styled-components/native';
import { darken } from 'polished';

export const Container = styled.View`
  background: #dadada;
`;

export const Product = styled.View`
  background: #fff7f7;
  padding: 10px;
  width: 220px;
  border-radius: 5px;
  margin: 10px;
`;

export const ProductImage = styled.Image`
  height: 200px;
  width: 200px;
  border-radius: 4px;
`;

export const ProductTitle = styled.Text`
  margin-top: 10px;
  font-size: 16px;
`;

export const ProductPrice = styled.Text`
  margin: 10px 0px 15px 0px;
  font-size: 20px;
  font-weight: bold;
`;

export const AddButton = styled.TouchableOpacity`
  background: #08ffc8;
  border-radius: 4px;
  flex-direction: row;
  align-items: center;
  margin-top: auto;
`;

export const ProductAmount = styled.View`
  padding: 12px;
  background: ${darken(0.04, '#08ffc8')};

  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;

  flex-direction: row;
  align-items: center;
`;

export const ProductAmountText = styled.Text`
  color: #0f1a1c;
  font-weight: bold;
  margin: 0px 4px 0px 10px;
`;

export const AddButtonText = styled.Text`
  flex: 1;
  color: #0f1a1c;
  font-weight: bold;
  text-align: center;
`;
