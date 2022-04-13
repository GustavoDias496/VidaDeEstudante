import styled, { css } from "styled-components/native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";

interface TransactionProps {
    type: 'income' | 'expense';
}

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.secondary};
    border-radius: 15;
    padding: 32px;
    margin-top: 61px;
    padding-bottom: 9px;
    margin-bottom: 0px;
`;

export const Title = styled.Text`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.text};
    margin-top: 1;
    padding: 0 5px;
`;

export const Amount = styled.Text<TransactionProps>`
    font-family: ${({ theme }) => theme.fonts.regular};
    font-size: ${RFValue(33)}px;
    color: ${({ theme, type }) => 
        type === 'income' ? theme.colors.income : theme.colors.expense};
    margin-top: 6px;
`;

export const Footer = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
`;

export const Category = styled.View`
    flex-direction: row;
    align-items: center;
`;
export const CategoryName = styled.Text`
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.regular};
    margin-left: 17px;
`;

export const Icon = styled(MaterialCommunityIcons)`
    font-size: ${RFValue(21)}px;
    color: ${({ theme }) => theme.colors.text};
`; 
export const Date = styled.Text`
    font-size: ${RFValue(15)}px;
    color: ${({ theme }) => theme.colors.text};
    font-family: ${({ theme }) => theme.fonts.regular};
`;

