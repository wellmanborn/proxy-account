import {useTranslation} from "react-i18next";
import {Card, Col, Form, InputGroup, Row} from "react-bootstrap";
import Button from "react-bootstrap/Button";
import {BsShieldLock} from "react-icons/bs";

function Accounts() {

    const {t} = useTranslation();

    return (
        <div className="mt-5 pt-5">
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
                            <Form>
                                <InputGroup className="mb-4">
                                    <Form.Label column sm={3}>
                                        {t("Account")}
                                    </Form.Label>
                                    <InputGroup.Text>
                                        <BsShieldLock/>
                                    </InputGroup.Text>
                                    <Form.Select aria-label="Default select example">
                                        <option>Please select ...</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </Form.Select>
                                </InputGroup>
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

export default Accounts;