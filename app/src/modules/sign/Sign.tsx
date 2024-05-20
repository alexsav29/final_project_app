import { Route, Routes } from "react-router-dom"
import { SignIn } from "./SignIn"
import { SignUp } from "./SignUp"

export const Sign = () => {
    return <>
        <Routes>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
        </Routes>
    </>
}