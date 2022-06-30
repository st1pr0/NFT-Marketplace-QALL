import {
    Link
} from "react-router-dom";
import { Navbar, Nav, Button, Container } from 'react-bootstrap'
import logo from './logo.png'

const Navigation = ({ web3Handler, account }) => {
    return (
        <Navbar expand="lg" bg="danger" variant="dark">
            <Container>
                <Navbar.Brand _blank href="https://www.quanterall.com/">
                    <img src={logo} width="40" height="40" className="" alt="" />
                    &nbsp; Quanterall NFT Marketplace
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/create">Create</Nav.Link>
                        <Nav.Link as={Link} to="/my-listed-items">Listed Items</Nav.Link>
                        <Nav.Link as={Link} to="/my-purchases">Purchases</Nav.Link>
                    </Nav>
                    <Nav>
                        {account ? (
                            <Nav.Link>
                                {account.slice(0, 5) + '...' + account.slice(38, 42)}
                            </Nav.Link>
                        ) : (
                            <Button onClick={web3Handler} variant="outline-light">Connect Wallet</Button>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )

}

export default Navigation;