import React from 'react';
import {Text, Image} from 'react-native';
import {
  ImageBackground,
  BlocoLogin,
  Input,
  Button,
  ButtonFacebook,
  TextButton,
} from './styles';

import fundo from '../../assets/planoFundo.jpg';
import logo from '../../assets/logo.png';

const Login = ({navigation}) => {
  return (
    <ImageBackground source={fundo}>
      <BlocoLogin>
        <Image
          source={logo}
          resizeMode="contain"
          style={{height: 60, marginBottom: 30}}
        />
        <Input
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          placeholderTextColor="#c4c4c4"
          placeholder="E-mail:"
        />

        <Input
          placeholderTextColor="#c4c4c4"
          placeholder="Senha:"
          autoCapitalize="words"
          autoCorrect={false}
        />

        <Button onPress={() => navigation.navigate('Home')}>
          <TextButton>CRIAR CONTA</TextButton>
        </Button>

        <ButtonFacebook onPress={() => navigation.navigate('Home')}>
          <TextButton>ENTRAR COM O FACEBOOK</TextButton>
        </ButtonFacebook>
      </BlocoLogin>
    </ImageBackground>
  );
};

export default Login;
