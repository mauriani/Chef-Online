import styled from 'styled-components/native';

export const Titulo = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  padding: 0 16px;
`;

export const BlocoPromocao = styled.View`
  margin-top: 10px;
`;
export const BlocoImage = styled.ImageBackground`
  width: 360px;
  height: 161px;
  left: 28px;
  top: 10px;
  opacity: 0.9;
`;

export const TituloPromo = styled.Text`
  font-size: 16px;
  font-family: Roboto-Bold;
  font-weight: bold;
  color: #fff;
  justify-content: flex-end;
  text-align: left;
  top: 100px;
  right: 5px;
  left: 5px;
  text-shadow: -1px 1px 10px rgba(0, 0, 0, 0.75);
  text-shadow-offset: { width: 2, height: 2 };
  text-Shadow-radius: 3px;
`;

export const Button = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #ef233c;
  height: 40px;
  width: 130px;
  border-radius: 20px;
  text-align: left;
  top: 100px;
  right: 5px;
`;

export const TextButton = styled.Text`
  font-size: 15px;
  font-weight: bold;
  color: #fff;
`;
