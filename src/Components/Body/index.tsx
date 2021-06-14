import React from 'react'
import Container from '../Container'
import Card from '../Card'

const Body: React.FC = () => {
    return (
        <Container>
            <Card getAltura={300} getLargura={600}>
                <h3>Conteudo</h3>
            </Card>
            <Card getAltura={300} getLargura={300}>
                <h3>Conteudo</h3>
            </Card>
            <Card getAltura={300} getLargura={450}>
                <h3>Conteudo</h3>
            </Card>
            <Card getAltura={300} getLargura={600}>
                <h3>Conteudo</h3>
            </Card>
            <Card getAltura={300} getLargura={300}>
                <h3>Conteudo</h3>
            </Card>
            <Card getAltura={300} getLargura={450}>
                <h3>Conteudo</h3>
            </Card>
        </Container>
    )
}
export default Body