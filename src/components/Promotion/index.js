import React from 'react';
import {View} from 'react-native';

import {
  Titulo,
  TituloPromo,
  BlocoPromocao,
  BlocoImage,
  Button,
  TextButton,
} from './styles';

import Promocao from '../../assets/foto-exemplo-1.jpg';

const promotion = () => {
  return (
    <BlocoPromocao>
      <Titulo style={{color: '#111'}}>Promoção da semana</Titulo>
      <BlocoImage source={Promocao} resizeMode="cover">
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <View style={{flexDirection: 'column'}}>
            <TituloPromo>O MONSTRO CHEGOOU !</TituloPromo>
            <TituloPromo>Big Hamburguer Duplo</TituloPromo>
          </View>
          <Button>
            <TextButton>EU QUERO !</TextButton>
          </Button>
        </View>
      </BlocoImage>
    </BlocoPromocao>
  );
};

export default promotion;
