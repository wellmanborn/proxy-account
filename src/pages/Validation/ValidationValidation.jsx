import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useTranslation} from "react-i18next";

function ValidationValidation() {

    const {t} = useTranslation();

    const schema = z.object({
        validation_code: z.string()
            .min(6, {message: t("Validation Code Is Not Valid")})
            .max(6, {message: t("Validation Code Is Not Valid")}),
    })

    return zodResolver(schema);
}

export default ValidationValidation;