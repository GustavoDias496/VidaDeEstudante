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
  Transactions,
  TransactionList
} from './styles';
import { HighLightCard } from '../../components/HighLightCard/Index';
import { TransactionCard, TransactionCardProps } from '../../components/TransactionCard/index';

export interface DataListProps extends TransactionCardProps{
  id: string;
}

export function Home() {

  const transactionData: DataListProps[] =[
    {
      id: '1',
      type: 'expense',
      title: 'Almoço Universidade',
      amount: 'R$22.55',
      category: {
        icon: 'silverware-fork-knife',
        name: 'Alimentação'
      },
      date: "12/12/21"
  },
  {
    id: '2',
    type: 'expense',
    title: 'Viagem SIC',
    amount: 'R$135.45',
    category: {
      icon: 'airplane',
      name: 'Viagem'
    },
    date: "01/12/21"
  },
  {
    id: '3',
    type: 'expense',
    title: 'Transporte Escolar',
    amount: 'R$03.00',
    category: {
      icon: 'bus',
      name: 'Transporte'
    },
    date: "01/12/21"
  },
  {
    id: '4',
    type: 'expense',
    title: 'Transporte Escolar',
    amount: 'R$03.00',
    category: {
      icon: 'bus',
      name: 'Transporte'
    },
    date: "02/12/21"
  },
  {
    id: '5',
    type: 'income',
    title: 'Auxílio Moradia',
    amount: 'R$400.00',
    category: {
      icon: 'cash-usd',
      name: 'Auxílio'
    },
    date: "03/12/21"
  },
]

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

          <HighLightCard
            title='Saída'
            amount='R$ 22,25'
            lastTransaction='Última saída dia 12/12'
            type='expense'
          />

          <HighLightCard
            title='Entrada'
            amount='R$ 22,25'
            lastTransaction='Última entrada dia 14/12'
            type='income'
          />

          <HighLightCard
            title='Total'
            amount='R$ 22,25'
            lastTransaction='03 à 27 de Dezembro'
            type='total'
          />

        </HighLightCards>

        <Transactions>
          <TransactionList
            data={transactionData}
            keyExtractor={( item ) => item.id}
            renderItem={({ item }) => 
            <TransactionCard data={item}/>
          }
          />
        </Transactions>
    </Container>
  );
}
