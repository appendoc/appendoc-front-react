import React from "react";
import {useLocation} from "react-router-dom";

const AppendocNavigation = React.lazy(() => import('../moles/AppendocNavigation'))
const SignUpByOAuth2Form = React.lazy(() => import('../moles/SignUpByOAuth2Form'))
const AppendocFooter = React.lazy(() => import('../moles/AppendocFooter'))

const SignInRequiredPage = () => {
    const {state} = useLocation()
    const {signUpKey, email} = state

    return (
        <>
            <AppendocNavigation/>
            <SignUpByOAuth2Form email={email} signUpKey={signUpKey}/>
            <AppendocFooter/>
        </>
    )
}

export default SignInRequiredPage;
