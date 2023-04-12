import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import "./Navbar.css";


function ColorSchemesExample() {
    return (
        <>
            <Navbar bg="success" variant="dark" className='navbar'>
                <Container>
                    <Navbar.Brand href="/" className='logo'>QuantGuru</Navbar.Brand>
                    <Nav className="list">
                        <Nav.Item>
                            <Nav.Link href="/" className='listbar'>Home</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/about" className='listbar'>About</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/cources" className='listbar'>Cources</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/onlinetest" className='listbar'> Online Test</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/gallery" className='listbar'>Gallery</Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Nav.Link href="/contact" className='listbar'>Contact</Nav.Link>
                        </Nav.Item>
                       
                    </Nav>
                    <Button variant="outline-light">Register Now</Button>{' '}
                </Container>
               
            </Navbar>
            
           
        </>
    );
}

export default ColorSchemesExample;