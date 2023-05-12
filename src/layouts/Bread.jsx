import { InputGroup, Navbar} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

function Bread() {

    const {t} = useTranslation();

    const location = useLocation();

    const [active, setActive] = useState(1)

    useEffect(() => {
        if(location.pathname === "/")
            setActive(1)
        if(location.pathname === "/validation")
            setActive(2)
        if(location.pathname === "/account")
            setActive(3)
        if(location.pathname === "/terms")
            setActive(4)
        if(location.pathname === "/receipt")
            setActive(5)
    }, [location])

    let getClassName = (num) => {
        let cls = "input-group-bread"
        if(num < active)
            cls += " passed"
        if(num === active)
            cls += " active"
        return cls
    }

    return (
        <>
            <Navbar>
                <InputGroup.Text
                    className={getClassName(1)}>
                    1 - ورود اطلاعات
                </InputGroup.Text>
                <InputGroup.Text
                    className={getClassName(2)}>
                    2 - اعتبار سنجی
                </InputGroup.Text>
                <InputGroup.Text
                    className={getClassName(3)}>
                    3 - ثبت وکالت
                </InputGroup.Text>
                <InputGroup.Text
                    className={getClassName(4)}>
                    4 - قوانین و مقررات
                </InputGroup.Text>
                <InputGroup.Text
                    className={getClassName(5)}>
                    5 - رسید
                </InputGroup.Text>
            </Navbar>
        </>
    );
}

export default Bread;