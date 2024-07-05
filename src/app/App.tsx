import { FC } from "react";
import { Btn } from "../shared/ui/button";


const App: FC = () => {

    return(
        <div className={"grid grid--isColumns-2 container isMY32"}>
            <div className={"grid__item--isColumn-1st isFlexCol"}>
                <Btn label={"Отключить"} />
            </div>
        </div>
    )

}

export default App
