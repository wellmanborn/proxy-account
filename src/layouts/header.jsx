import {Container, Image, Nav, Navbar} from "react-bootstrap";
import logo from "/images/new logo.png"
import {useTranslation} from "react-i18next";

function Header() {

    const {t} = useTranslation();

    return (
        <>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand href="#home">
                        <Image src={logo}/>
                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link target="_blank" href="https://noorbank.ir">{t("Noor Website")}</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
}

export default Header;