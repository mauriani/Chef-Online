import React from 'react';
import {FlatList, View, Text} from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';
import {
  Container,
  Titulo,
  TextMenu,
  Suggestion,
  IconView,
  Card,
  Img,
  TextTitulo,
  SubTitulo,
  Footer,
  IconsView,
  PriceText,
} from './styles';

import img1 from '../images/suggestion-01.png';
import img2 from '../images/suggestion-02.png';
import img3 from '../images/suggestion-03.png';
import img4 from '../images/suggestion-04.png';
import img5 from '../images/suggestion-05.png';
import img6 from '../images/suggestion-06.png';

const colecaoImgs = [
  {
    key: String(Math.random()),
    img: img1,
    label: 'Pizza Crocante',
    restaurant: 'BonnaPizza',
    price: 49,
  },
  {
    key: String(Math.random()),
    img: img2,
    label: 'Comida Japonesa',
    restaurant: 'Comida Oriental',
    price: 49,
  },
  {
    key: String(Math.random()),
    img: img3,
    label: 'Comida Mexicana',
    restaurant: 'Los Nachos',
    price: 52,
  },
  {
    key: String(Math.random()),
    img: img4,
    label: 'Café da Manhã',
    restaurant: 'Padaria LeiteQuente',
    price: 39,
  },
  {
    key: String(Math.random()),
    img: img5,
    label: 'Comida Vegana',
    restaurant: 'Veganos',
    price: 52,
  },

  {
    key: String(Math.random()),
    img: img6,
    label: 'Cakes',
    restaurant: 'Confeitaria JuCakes',
    price: 52,
  },
];

const ChefsSuggestion = () => {
  return (
    <Container>
      <Suggestion>
        <Titulo>Sugestão do Chef</Titulo>
        <IconView>
          <TextMenu>Ver Todas</TextMenu>
          <Icon name="caret-forward" size={25} color="#ef233c" />
        </IconView>
      </Suggestion>
      <FlatList
        data={colecaoImgs}
        showsHorizontalScrollIndicator={false}
        numColumns={2}
        columnWrapperStyle={{
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}
        keyExtractor={(item, index) => item.key}
        renderItem={({item}) => (
          <Card>
            <Img source={item.img} resizeMode="cover"></Img>
            <TextTitulo>{item.label}</TextTitulo>
            <SubTitulo>{item.restaurant}</SubTitulo>
            <Footer>
              <IconsView>
                <Icon name="star" size={10} color="#FFCA3A" />
                <Icon name="star" size={10} color="#FFCA3A" />
                <Icon name="star" size={10} color="#FFCA3A" />
                <Icon name="star" size={10} color="#FFCA3A" />
                <Icon name="star" size={10} color="#FFCA3A" />
              </IconsView>
              <PriceText>R${item.price}</PriceText>
            </Footer>
          </Card>
        )}
      />
    </Container>
  );
};

export default ChefsSuggestion;
