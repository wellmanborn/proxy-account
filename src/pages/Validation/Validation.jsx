import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Card, Col, InputGroup, Row } from "react-bootstrap";
import { BsShieldLock } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import useCountdown from "../../components/UseCountdown";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ValidationValidation from "./ValidationValidation.jsx";
import { useMemo, useState } from "react";

function Validation() {
  const { t } = useTranslation();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: ValidationValidation() });

  const navigate = useNavigate();

  const [isSubmitted, setIsSubmitted] = useState(false);

  let [minutes, seconds, setCountDown] = useCountdown(180);

  const [validationCode, setValidationCode] = useState("");

  let sendCodeAgain = () => {
    setCountDown(180);
  };

  let onSubmit = (data) => {
    navigate("/account", { replace: true });
    console.log(data);
  };

  return (
    <div className="mt-5 pt-5">
      <Row className="justify-content-center">
        <Col md="5">
          <Card className="center-block">
            {useMemo(
              () => (
                <Card.Header as="h6">
                  <BsShieldLock className="m-2" />
                  {t("Validation Code")}
                </Card.Header>
              ),
              [isSubmitted]
            )}
            <Card.Body>
              <Card.Text>{t("Insert Validation Code")}</Card.Text>
              <Form onSubmit={handleSubmit(() => onSubmit())}>
                {useMemo(
                  () => (
                    <InputGroup className="mb-2">
                      <Form.Label column sm={3}>
                        {t("Validation Code")}
                      </Form.Label>

                      <Col sm={9}>
                        <InputGroup className="mb-3">
                          <InputGroup.Text id="basic-addon1">
                            <BsShieldLock />
                          </InputGroup.Text>
                          <Form.Control
                            {...register("validation_code")}
                            isInvalid={errors.validation_code}
                            placeholder={t("Validation Code")}
                            aria-label={t("Validation Code")}
                            aria-describedby="basic-addon1"
                            onChange={(event) => {
                              setValidationCode(event.target.value);
                              console.log(validationCode);
                            }}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.validation_code &&
                              errors.validation_code.message}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Col>
                    </InputGroup>
                  ),
                  [validationCode]
                )}
                {useMemo(
                  () => (
                    <InputGroup className="justify-content-end mb-3">
                      <Card.Text dir="ltr">
                        {minutes} : {seconds}
                      </Card.Text>
                    </InputGroup>
                  ),
                  [minutes, seconds]
                )}
                {useMemo(
                  () => (
                    <InputGroup className="justify-content-end">
                      <div className="justify-content-end">
                        <Button
                          disabled={!(seconds === "00" && minutes === "00")}
                          onClick={sendCodeAgain}
                          variant="primary"
                        >
                          {t("Send Validation Code Again")}
                        </Button>
                      </div>
                      <div
                        className="justify-content-start"
                        style={{ marginRight: 20 }}
                      >
                        <Button
                          variant="primary"
                          type="submit"
                          onClick={() => setIsSubmitted((prev) => !prev)}
                        >
                          {t("Accept")}
                        </Button>
                      </div>
                    </InputGroup>
                  ),
                  [isSubmitted]
                )}
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default Validation;
