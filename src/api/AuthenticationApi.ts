import {AxiosInstance} from "axios";
import apiClient from "./AxiosConfiguration";

export class GoogleOAuth2AuthenticationRequest {
    code: string
    state: string
    authuser: string
    prompt: string

    constructor(code: string, state: string, authuser: string, prompt: string) {
        this.code = code;
        this.state = state;
        this.authuser = authuser;
        this.prompt = prompt;
    }
}

export interface GetAuthorizationUrlResponse {
    authorizationUrl: string
}

// TODO: 서브타입이 존재하는 응답은 어떻게 처리할 지 알아보고 고치자
export interface GoogleOAuth2AuthenticationResponse {
    type: string
    signUpKey: string
    email: string
}

interface AuthenticationApi {
    getAuthorizationUrl: () => Promise<GetAuthorizationUrlResponse>
    authenticateByGoogle: (request: GoogleOAuth2AuthenticationRequest) => Promise<GoogleOAuth2AuthenticationResponse>
}

class AuthenticationApiImpl implements AuthenticationApi {

    private readonly apiClient: AxiosInstance;

    constructor(apiClient: AxiosInstance) {
        this.apiClient = apiClient;
    }

    authenticateByGoogle(
        request: GoogleOAuth2AuthenticationRequest
    ): Promise<GoogleOAuth2AuthenticationResponse> {
        console.debug(`request path: /authentication/google/callback param: ${request}`)
        const response = this.apiClient
            .post<GoogleOAuth2AuthenticationResponse>(`/authentication/google/callback`, request)
        return response
            .then((result) => result.data)
            .catch(error => Promise.reject(error))
    }

    getAuthorizationUrl(): Promise<GetAuthorizationUrlResponse> {
        const response = this.apiClient
            .get<GetAuthorizationUrlResponse>(`/authentication/google/url/authorization`)
        return response
            .then((result) => result.data)
            .catch(error => Promise.reject(error))
    }
}

const authenticationApi: AuthenticationApi = new AuthenticationApiImpl(apiClient)
export default authenticationApi
