import {Container, Image, InputGroup, Navbar} from "react-bootstrap";
import logo from "/images/logo_fa_IR.png"

function Header({active}) {
    return (
        <>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">
                    <Navbar bg="light">
                        <Container>
                            <Navbar.Brand href="#home">
                                <Image src={logo}/>
                            </Navbar.Brand>
                        </Container>
                    </Navbar>
                </Navbar.Brand>
                {/*<Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                    <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">
                            Another action
                        </NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        <NavDropdown.Divider/>
                        <NavDropdown.Item href="#action/3.4">
                            Separated link
                        </NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>*/}
            </Navbar>
            <Navbar>
                <InputGroup.Text className={active === 1 ? `input-group-bread active` : (active > 1 ? `input-group-bread passed` : `input-group-bread`)}>
                    1 - ورود اطلاعات
                </InputGroup.Text>
                <InputGroup.Text className={active === 2 ? `input-group-bread active` : (active > 2 ? `input-group-bread passed` : `input-group-bread`)}>
                    2 - اعتبار سنجی
                </InputGroup.Text>
                <InputGroup.Text className={active === 3 ? `input-group-bread active` : (active > 3 ? `input-group-bread passed` : `input-group-bread`)}>
                    3 - ثبت وکالت
                </InputGroup.Text>
                <InputGroup.Text className={active === 4 ? `input-group-bread active` : (active > 4 ? `input-group-bread passed` : `input-group-bread`)}>
                    4 - قوانین و مقررات
                </InputGroup.Text>
                <InputGroup.Text className={active === 5 ? `input-group-bread active` : (active > 5 ? `input-group-bread passed` : `input-group-bread`)}>
                    5 - رسید
                </InputGroup.Text>
            </Navbar>
        </>
    );
}

export default Header;