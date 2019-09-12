import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 15px;
  background: #fff7f7;
  border-radius: 4px;
  margin: 15px;
`;

export const Products = styled.View``;

export const Product = styled.View``;

export const ProductInfo = styled.View`
  flex-direction: row;
  align-items: center;
  background: #fff;
`;

export const ProductImage = styled.Image`
  width: 80px;
  height: 80px;
`;

export const ProductDetails = styled.View`
  flex: 1;
  margin-left: 10px;
  padding: 10px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
`;

export const ProductPrice = styled.Text`
  font-size: 18px;
  font-weight: bold;
  margin-top: 5px;
`;

export const ProductDelete = styled.TouchableOpacity`
  padding: 6px;
`;

export const ProductControls = styled.View`
  background: transparent;
  padding: 8px;
  flex-direction: row;
  border-radius: 5px;
  min-width: 55px;
  border: 2px solid #fff;
  align-items: center;
  margin-bottom: 5px;
`;

export const ProductControlButton = styled.TouchableOpacity``;

export const ProductAmount = styled.TextInput.attrs({
  readonly: true,
})`
  background: #fff;
  padding: 5px;
  margin: 0px 5px;
  border-radius: 5px;
  min-width: 55px;
`;

export const ProductSubtotal = styled.Text`
  flex: 1;
  font-size: 18px;
  font-weight: bold;
  text-align: right;
`;

export const TotalContainer = styled.View`
  margin-top: 30px;
`;

export const TotalText = styled.Text`
  text-align: center;
  color: #999;
  font-weight: bold;
`;

export const TotalAmount = styled.Text`
  text-align: center;
  font-size: 35px;
  font-weight: bold;
  margin-top: 5px;
  margin-bottom: 30px;
`;

export const Order = styled.TouchableOpacity`
  background: #08ffc8;
  padding: 12px;
  border-radius: 5px;
`;

export const OrderText = styled.Text`
  color: #0f1a1c;
  font-weight: bold;
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
`;

export const EmptyContainer = styled.View`
  margin: 10px 0px;
  align-items: center;
  justify-content: center;
`;

export const EmptyText = styled.Text`
  font-size: 25px;
  font-weight: bold;
  margin: 25px 0px 20px 0px;
  text-align: center;
  color: #0f1a1c;
`;
