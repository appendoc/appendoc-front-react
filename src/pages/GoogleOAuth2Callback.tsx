import React, {useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import authenticationApi, {
    GoogleOAuth2AuthenticationRequest,
    GoogleOAuth2AuthenticationResponse
} from "../api/AuthenticationApi";

const GoogleOAuth2Callback = () => {
    const {search} = useLocation()
    const query = React.useMemo(() => new URLSearchParams(search), [search]);
    const navigate = useNavigate()

    useEffect(() => {
        authenticationApi
            .authenticateByGoogle(
                new GoogleOAuth2AuthenticationRequest(
                    query.get('code') as string,
                    query.get('state') as string,
                    query.get('authuser') as string,
                    query.get('prompt') as string,
                )
            )
            .then((authResponse: GoogleOAuth2AuthenticationResponse) => {
                if (authResponse.type === 'USER_NOT_SIGNED_UP') {
                    navigate(
                        '/sign-up-by-oauth2',
                        {
                            state: {
                                signUpKey: authResponse.signUpKey,
                                email: authResponse.email
                            }
                        }
                    )
                }
                if (authResponse.type === 'USER_ALREADY_SIGNED_UP') {
                    navigate('/')
                }
            })
    })

    return (
        <></>
    )
}

export default GoogleOAuth2Callback
