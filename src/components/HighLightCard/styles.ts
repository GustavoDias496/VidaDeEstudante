import styled, { css } from "styled-components/native";
import { Entypo, Feather } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";

interface TypeProps{
    type: 'income' | 'expense' | 'total';
}

export const Container = styled.View<TypeProps>`
    background-color: ${({ theme, type }) => 
        type === 'total' ? theme.colors.secondary : theme.colors.secondary};
    width: ${RFValue(330)}px;
    border-radius: 11px;

    padding: 19px 28px;
    padding-bottom: ${RFValue(23)}px;

    margin-right: 19px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.Text<TypeProps>`
    font-size: ${RFValue(27)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme, type }) => 
        type === 'total' ? theme.colors.primary : theme.colors.text};

`;

export const Icon = styled(Entypo)<TypeProps>`
    font-size: ${RFValue(48)}px;
    color: ${({ theme, type }) => 
        type === 'income' ? theme.colors.income : theme.colors.expense};
`;

export const IconTotal = styled(Feather)<TypeProps>`
    font-size: ${RFValue(48)}px;
    color: red;

    color: ${({ theme }) => theme.colors.primary};
`;

export const Footer  = styled.View`

`;

export const Amount = styled.Text<TypeProps>`
    font-size: ${RFValue(27)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme, type }) => 
        type === 'total' ? theme.colors.primary : theme.colors.text};

    margin-top: ${RFValue(51)}px;

`;

export const LastTransaction  = styled.Text<TypeProps>`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme, type }) => 
        type === 'total' ? theme.colors.primary : theme.colors.text};
    
`;