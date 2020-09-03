import React, {Component} from 'react';
import NavigationBar from 'react-native-navbar-color';

import {Container, Header, Search, Input, Titulo} from './styles';
import Promotion from '../../components/Promotion';
import ChefsSuggestion from '../../components/ChefsSuggestion';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Home extends Component {
  componentDidMount() {
    NavigationBar.setColor('#ef233c');
  }

  render() {
    return (
      <Container>
        <Header>
          <Titulo>O que você está procurando ?</Titulo>
          <Search>
            <Input
              placeholderTextColor="#c4c4c4"
              placeholder="Pesquise sua comida favorita ..."
              autoCapitalize="words"
              autoCorrect={false}
            />
            <Icon
              name="ios-search"
              size={25}
              color="#adaeb2"
              style={{padding: 10}}
            />
          </Search>
        </Header>
        <Promotion />
        <ChefsSuggestion />
      </Container>
    );
  }
}
