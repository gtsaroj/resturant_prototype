import { useTranslation } from "react-i18next"
import { SpecialCard } from "../Common/Card/Special.card";

export const Specials = () => {

    const { t } = useTranslation()
     const specials = t("specials") as any[];
    return (
        <div className="w-full flex flex-col items-start justify-center gap-[50px] ">
            <h1 className=" text-lg tracking-wide ">Specials</h1>
            <div className="w-full overflow-auto flex items-center justify-start gap-[16px] ">
                {
                    specials?.map((special, index) => (
                        <SpecialCard {...special} key={index} />
                    ))
 }
            </div>
        </div>
    )
}