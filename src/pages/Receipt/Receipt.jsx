import {useTranslation} from "react-i18next";
import {Card, Col, Form, InputGroup, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {BsShieldLock} from "react-icons/bs";

function Receipt() {

    const {t} = useTranslation();



    return (<div className="mt-5 pt-5">
            <Row className="justify-content-center">
                <Col md="5">
                    <Card className="center-block">
                        <Card.Header as="h6">
                            <BsShieldLock className="m-2"/>
                            {t("Register Proxy")}
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {t("Select Account to Set Proxy on it")}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>);
}

export default Receipt;