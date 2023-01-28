import {AxiosInstance} from "axios";
import apiClient from "./AxiosConfiguration";

export class SignUpRequest {
    type: string
    signUpKey: string
    displayName: string


    constructor(type: string, signUpKey: string, displayName: string) {
        this.type = type;
        this.signUpKey = signUpKey;
        this.displayName = displayName;
    }
}

export class SignUpResponse {
    type: string

    constructor(type: string) {
        this.type = type;
    }
}

interface SignUpApi {
    signUpByOAuth2: (request: SignUpRequest) => Promise<SignUpResponse>
}

class SignUpApiImpl implements SignUpApi {

    private readonly apiClient: AxiosInstance;

    constructor(apiClient: AxiosInstance) {
        this.apiClient = apiClient;
    }

    signUpByOAuth2(request: SignUpRequest): Promise<SignUpResponse> {
        const response = this.apiClient.post<SignUpResponse>(`/users`, request)
        return response
            .then((result) => result.data)
            .catch(error => Promise.reject(error))
    }
}

const signUpApi: SignUpApi = new SignUpApiImpl(apiClient)
export default signUpApi;
