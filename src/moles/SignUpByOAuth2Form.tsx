import React, {useState} from "react";
import './SignUpByOAuth2Form.css';
import AppendocButton from "../components/AppendocButton";
import signUpApi, {SignUpRequest} from "../api/SignUpApi";
import authenticationApi from "../api/AuthenticationApi";

const AppendocInput = React.lazy(() => import("../components/AppendocInput"))

type SignUpByOAuth2FormProps = {
    email: string,
    signUpKey: string
}

// 닉네임
const SignUpByOAuth2Form = (props: SignUpByOAuth2FormProps) => {
    const [displayName, setDisplayName] = useState('')
    return (
        <article className={'appendoc-signup-oauth2'}>
            <AppendocInput
                text={props.email}
                readonly={true}
            />
            <AppendocInput
                placeholder={'사용하실 이름을 적어주세요.'}
                readonly={false}
                onChange={text => setDisplayName(text)}
            />
            <AppendocButton
                buttonText={'가입하기'}
                onClick={() => {
                    const request = new SignUpRequest(
                        "OAUTH2",
                        props.signUpKey,
                        displayName
                    )
                    signUpApi.signUpByOAuth2(request)
                        .then(signUpResponse => {
                            if (signUpResponse.type === 'SIGN_UP_ACCEPTED') {
                                authenticationApi
                                    .getAuthorizationUrl()
                                    .then(r => {
                                        window.location.replace(r.authorizationUrl)
                                    })
                            }

                            if (signUpResponse.type === 'SIGN_UP_DECLINED') {

                            }
                        })
                }}
            />
        </article>
    )
}

export default SignUpByOAuth2Form
