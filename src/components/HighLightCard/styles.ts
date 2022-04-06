import styled from "styled-components/native";
import { Entypo } from '@expo/vector-icons';
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
    background-color: ${({ theme }) => theme.colors.secondary};
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

export const Title = styled.Text`
    font-size: ${RFValue(27)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.title};

`;

export const Icon = styled(Entypo)`
    font-size: ${RFValue(48)}px;
    color: red;
`;

export const Footer  = styled.View`

`;

export const Amount = styled.Text`
    font-size: ${RFValue(27)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text};

    margin-top: ${RFValue(51)}px;

`;

export const LastTransaction  = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.regular};
    color: ${({ theme }) => theme.colors.text};
`;