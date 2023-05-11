import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Card, Col, InputGroup, Row} from "react-bootstrap";
import {BsMailbox, BsShieldLock} from 'react-icons/bs';
import {BiRefresh} from 'react-icons/bi';
import {useTranslation} from 'react-i18next';
import Captcha from "../../assets/capcha.jpeg";

function SignIn() {

    const {t} = useTranslation();

    return (
        <div className="mt-5 pt-5">
            <Row className="justify-content-center">
                <Col md="5">
                    <Card className="center-block">
                        <Card.Header as="h6">
                            <BsShieldLock className="m-2"/>
                            {t("Please insert national code and mobile number")}
                        </Card.Header>
                        <Card.Body>
                            <Form>
                                <InputGroup className="mb-2">
                                    <Form.Label column sm={3}>
                                        {t('National Code')}
                                    </Form.Label>
                                    <Col sm={9}>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="basic-addon1">
                                                <BsMailbox/>
                                            </InputGroup.Text>
                                            <Form.Control
                                                type="number"
                                                placeholder={t("National Code 10 digits")}
                                                aria-label={t("National Code 10 digits")}
                                                aria-describedby="basic-addon1"
                                            />
                                        </InputGroup>
                                    </Col>
                                </InputGroup>

                                <InputGroup className="mb-3">
                                    <Form.Label column sm={3}>
                                        {t("Mobile Number")}
                                    </Form.Label>
                                    <Col sm={9}>
                                        <InputGroup className="mb-3">
                                            <InputGroup.Text id="basic-addon1">
                                                <BsShieldLock/>
                                            </InputGroup.Text>
                                            <Form.Control
                                                type="number"
                                                placeholder={t("Mobile Number in 09xx-xxxxxxx format")}
                                                aria-label={t("Mobile Number in 09xx-xxxxxxx format")}
                                                aria-describedby="basic-addon1"
                                            />
                                        </InputGroup>
                                    </Col>
                                </InputGroup>
                                <InputGroup className="mb-4">
                                    <Form.Label column sm={3}>
                                        {t("Captcha Code")}
                                    </Form.Label>
                                    <Col sm={5}>
                                        <InputGroup className="mb-6">
                                            <Form.Control
                                                type="text"
                                                placeholder={t("Captcha Code")}
                                                aria-label={t("Captcha Code")}
                                                aria-describedby="basic-addon1"
                                            />
                                            <InputGroup.Text id="basic-addon1">
                                                <BiRefresh/>
                                            </InputGroup.Text>

                                        </InputGroup>

                                    </Col>
                                    <Col sm={4} className="">
                                        <img style={{width: 145, height: 80, borderRadius: 3, border: "1px solid #ced4da", marginRight: "8px"}} src={Captcha} alt="captcha"/>
                                    </Col>
                                </InputGroup>

                                <InputGroup className="justify-content-end">
                                    <Button variant="primary" type="submit">
                                        {t("Sign In")}
                                    </Button>
                                </InputGroup>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </div>
    );
}

export default SignIn;