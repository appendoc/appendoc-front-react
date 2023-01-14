import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import wikiApi, {FindWikiDocumentResponse, WikiDocumentNotFoundResponse} from "../api/WikiApi";

const AppendocNavigation = React.lazy(() => import('../moles/AppendocNavigation'))
const AppendocViewer = React.lazy(() => import('../components/AppendocViewer'))
const AppendocFooter = React.lazy(() => import('../moles/AppendocFooter'))

const AppendocWikiViewer = () => {
    const params = useParams()
    const navigate = useNavigate()
    const documentName = params.documentName as string

    const [documentTitle, setDocumentTitle] = useState('')
    const [content, setContent] = useState('')

    useEffect(() => {
        wikiApi
            .getWikiDocument(documentName)
            .then(wikiDocument => {
                setDocumentTitle((wikiDocument as FindWikiDocumentResponse).documentName)
                setContent((wikiDocument as FindWikiDocumentResponse).content)
            })
            .catch(error => {
                console.error(error as WikiDocumentNotFoundResponse)
                navigate("/page-not-found")
            })
    }, [])

    return (
        <>
            <AppendocNavigation/>
            <AppendocViewer documentTitle={documentTitle} content={content}/>
            <AppendocFooter/>
        </>
    )
}

export default AppendocWikiViewer
