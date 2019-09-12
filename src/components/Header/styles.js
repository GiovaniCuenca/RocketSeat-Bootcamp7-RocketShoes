import styled from 'styled-components/native';

import logo from '../../assets/images/logo.png';

export const Wrapper = styled.View`
  flex-direction: row;
  background: #204969;
`;

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  padding: 20px 20px 20px 10px;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.TouchableOpacity``;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 200px;
  height: 25px;
`;

export const ItemCount = styled.Text`
  position: absolute;
  top: -8px;
  right: -8px;
  text-align: center;
  min-width: 18px;
  min-height: 18px;
  border-radius: 9px;
  overflow: hidden;
  background: #08ffc8;
  color: #0f1a1c;
  font-weight: bold;
  font-size: 12px;
`;

export const BasketContainer = styled.TouchableOpacity`
  width: 24px;
  height: 24px;
`;
