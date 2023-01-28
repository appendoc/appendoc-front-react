import React from "react";

const AppendocNavigation = React.lazy(() => import('../moles/AppendocNavigation'))
const SignInRequiredMenu = React.lazy(() => import('../moles/SignInRequiredMenu'))
const AppendocFooter = React.lazy(() => import('../moles/AppendocFooter'))

const SignInRequiredPage = () => {

    return (
        <>
            <AppendocNavigation/>
            <SignInRequiredMenu/>
            <AppendocFooter/>
        </>
    )
}

export default SignInRequiredPage;
