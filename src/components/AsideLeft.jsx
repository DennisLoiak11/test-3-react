import { Button, Col, Container, Form, FormControl, Row } from "react-bootstrap";
import logo from '../logo/Spotify_Logo.png' 

const AsideLeft = () => {
    return (
        <>
            <Container fluid>
                <Row>
                    <Col sm={2} className="p-0">
                        <nav className="navbar-dark bg-dark vh-100 sticky-sm-top p-2">
                            <a className="navbar-brand" href="#home">
                                <img src={logo} alt='Logo' style={{ width: "130px", height: "40px" }} />
                            </a>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="#home">
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#link">
                                        Your library
                                    </a>
                                </li>
                            </ul>
                            <Form className="d-flex" role="search">
                                <FormControl type="search" placeholder="Search" aria-label="Search" className="me-2" />
                                <Button variant="outline-success" type="submit">Search</Button>
                            </Form>
                        </nav>
                        <div className='d-flex flex-column sticky-bottom'>
                            <Button className="w-75 mx-auto mb-4 rounded-pill" variant="light" type="submit">Sign up</Button>
                            <Button className="w-75 mx-auto mb-4 rounded-pill border-white" variant="dark" type="submit">Login</Button>
                            <p className="text-secondary text-center">Cookie Policy | Privacy</p>
                        </div>
                    </Col>
                    <Col sm={10}>
                        
                    </Col>
                </Row>
            </Container>
        </>
    );
}
export default AsideLeft;