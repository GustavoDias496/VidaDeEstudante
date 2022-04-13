import { StyleSheet } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import styled from 'styled-components/native';
import { MaterialIcons } from '@expo/vector-icons';

import { FlatList, FlatListProps } from "react-native";
import { DataListProps } from ".";

export const Container =  styled.View`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`; 

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(35)}px;
  background-color: ${({ theme }) => theme.colors.background};
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;

`;

export const ContainerWrapper = styled.View`
  width: 100%;
  padding: 0 8px;
  margin-top: ${getStatusBarHeight() + RFValue(32)};
  flex-direction: row;  
  align-items: center;
  justify-content: space-between;
  
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;

`;

export const Photo = styled.Image`
  width: ${RFValue(66)}px;
  height: ${RFValue(68)}px;
  border-radius: 56;
`;

export const User = styled.View`
  margin-left: ${RFValue(27)}px;
`;

export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(24)}px;
  line-height: ${RFValue(29)}px;
`;

export const UserNome = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(24)}px;
  line-height: ${RFValue(29)}px;
`;

export const Icon = styled(MaterialIcons)`
  color: ${({ theme }) => theme.colors.text_light50};
  font-size: ${RFValue(31)}px;
`;

export const HighLightCards = styled.ScrollView.attrs({        
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingLeft: 17}
  })`
  
    width: 100%;
    position: absolute;
    margin-top: ${RFValue(166) - getStatusBarHeight()}px;
    background-color: ${({ theme }) => theme.colors.primary};
  `;

export const Transactions = styled.View`
  flex: 1;
  padding: 0 24px;
  margin-top: ${RFValue(84)}px;
`;

export const TransactionList = styled(
  FlatList as new (props: FlatListProps<DataListProps>) => FlatList <DataListProps>).attrs({showsVerticalScrollIndicator: false})``;