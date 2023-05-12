import {z} from "zod";
import {zodResolver} from "@hookform/resolvers/zod";
import {useTranslation} from "react-i18next";
function AccountsValidation() {

    const {t} = useTranslation();

    const schema = z.object({
        account: z.string().min( 1, {message: t("Please Select An Account To Block")} ),
    })

    return zodResolver(schema);
}

export default AccountsValidation;