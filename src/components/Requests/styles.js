import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;
export const Suggestion = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const Titulo = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #111;
  padding: 0 16px;
`;

export const IconView = styled.View`
  flex-direction: row;
`;

export const TextMenu = styled.Text`
  font-size: 16px;
  color: #ef233c;
`;

export const Card = styled.TouchableOpacity`
  background-color: #fff;
  width: 180px;
  height: 170px;
  margin: 4px;
  border-radius: 2px;
  border-width: 3px;
  border-color: #f5f5f5;
`;

export const Img = styled.Image`
  width: 175px;
  height: 90px;
  align-items: center;
`;

export const TextTitulo = styled.Text`
  left: 4px;
  font-weight: bold;
  margin-top: 2px;
  font-size: 15px;
`;

export const SubTitulo = styled.Text`
  left: 4px;
  margin-top: 1px;
  font-size: 10px;
`;

export const Footer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
`;

export const IconsView = styled.View`
  flex-direction: row;
`;

export const PriceText = styled.Text`
  left: 4px;
  margin-top: 1px;
  font-size: 10px;
  color: #ef233c;
  font-weight: bold;
`;
