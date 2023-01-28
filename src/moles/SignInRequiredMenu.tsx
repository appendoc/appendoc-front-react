import React, {useEffect, useState} from "react";
import './SignInRequiredMenu.css';
import authenticationApi from "../api/AuthenticationApi";

const AppendocButton = React.lazy(() => import('../components/AppendocButton'))

const SignInRequiredMenu = () => {
    const [googleAuthorizationUrl, setGoogleAuthorizationUrl] = useState('')
    useEffect(() => {
        authenticationApi
            .getAuthorizationUrl()
            .then(response => {
                setGoogleAuthorizationUrl(response.authorizationUrl)
            })
    })
    return (
        <article className={'appendoc-sign-in-required-menu'}>
            <AppendocButton
                buttonText={'Sign in with Google'}
                link={googleAuthorizationUrl}
            />
        </article>
    )
}

export default SignInRequiredMenu;
