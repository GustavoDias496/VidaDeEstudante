import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { 
  Container, 
  Header, 
  ContainerWrapper, 
  UserInfo, 
  Photo, 
  User, 
  UserGreeting, 
  UserNome,
  Icon,
  HighLightCards,
} from './styles';
import { HighLightCard } from '../../components/HighLightCard/Index';


export function Home() {
  return (
    <Container >
      <Header>
        <ContainerWrapper>
          <UserInfo>
            <Photo source={{uri: 'https://github.com/AndradeOsvaldo.png'}}/>
              <User>
                <UserGreeting>Olá, </UserGreeting>
                <UserNome>Osvaldo!</UserNome>
              </User>
          </UserInfo>
          <Icon name="logout" />
        </ContainerWrapper>
      </Header>
        <HighLightCards>

          <HighLightCard/>
          <HighLightCard/>
          <HighLightCard/>

        </HighLightCards>
    </Container>
  );
}
