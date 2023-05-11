import {useTranslation} from "react-i18next";
import {Card, Col, Form, InputGroup, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {BsShieldLock} from "react-icons/bs";

function Terms() {

    const {t} = useTranslation();

    return (
        <div className="">
            <Row className="justify-content-center">
                <Col md="12">
                    <Card className="center-block">
                        <Card.Header as="h6">
                            <BsShieldLock className="m-2"/>
                            {t("Register Proxy")}
                        </Card.Header>
                        <Card.Body>
                            <Card.Text>
                                {t("Terms")}
                            </Card.Text>
                            <Form>
                                <InputGroup className="justify-content-end">
                                    <div className="justify-content-start" style={{ marginRight: 20}}>
                                        <Button variant="primary" type="submit">
                                            {t("Accept")}
                                        </Button>
                                    </div>
                                </InputGroup>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default Terms;