import React from "react";
import { Container, Header, Title, Icon, Footer, Amount, LastTransaction  } from "./styles";
import { Entypo } from '@expo/vector-icons'; 


export function HighLightCard (){
    return (
        <Container>
            <Header>
                <Title>Saída</Title>
                <Icon name="arrow-with-circle-down" />
            </Header>

            <Footer>
                <Amount>R$ 22,25</Amount>
                <LastTransaction>Última saída dia 12/12</LastTransaction>
            </Footer>
        </Container>
    );
}