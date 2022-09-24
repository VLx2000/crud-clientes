import { Navbar, Container } from 'react-bootstrap';
import './styles.css';

function NavigationBar() {
    return (
        <Navbar collapseOnSelect bg="dark" variant='dark' expand="lg" sticky="top">
            <Container >
                <Navbar.Brand href='/' title="Processamento de imagens">
                    <h1>Dashboard de Clientes</h1>
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;