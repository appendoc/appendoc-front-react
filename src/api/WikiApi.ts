import {AxiosInstance} from "axios";
import apiClient from "./AxiosConfiguration";

export interface WikiDocumentNotFoundResponse {
    requestDocumentName: string
}

export interface FindWikiDocumentResponse {
    documentName: string,
    content: string,
    writtenAt: Date
}

interface WikiApi {

    getWikiDocument: (documentName: string) => Promise<FindWikiDocumentResponse | WikiDocumentNotFoundResponse>
}

class WikiApiImpl implements WikiApi {

    private readonly apiClient: AxiosInstance;

    constructor(apiClient: AxiosInstance) {
        this.apiClient = apiClient;
    }

    getWikiDocument = async (documentName: string) => {
        console.debug(`request path: /wiki/${documentName}`)
        const response = this.apiClient
            .get<FindWikiDocumentResponse | WikiDocumentNotFoundResponse>(`/wiki/${documentName}`)

        return response
            .then((result) => result.data)
            .catch(error => Promise.reject(error))
    }
}

const wikiApi: WikiApi = new WikiApiImpl(apiClient)
export default wikiApi
