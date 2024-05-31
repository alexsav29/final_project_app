import { useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import { ResultMessage } from "./components/ResultMessage"


export type UserDataType = {
    username: string
    email: string
}

export const Result = () => {
    // const location = useLocation();
    // console.log(location);
    
    const location = useLocation();

    const state = location?.state;
    const userData = state?.userData as UserDataType;  // вопросы по записи с as (это как типизация?)
    const navigate = useNavigate();
    
    useEffect(() => {
        if (!state) {
            navigate('../cart');
        }
    }, [state]);

    return <>
        { state && <ResultMessage data={userData} /> }
    </>
}