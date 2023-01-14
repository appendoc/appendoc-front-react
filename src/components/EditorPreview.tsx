import React, {useEffect} from "react";
import './EditorPreview.css';
import {editorUseStore} from "../pages/AppendocEditor";
import hljs from "highlight.js";

const Markdown = React.lazy(() => import('marked-react'))
const EditorPreview = () => {
    const {title, rawMarkdown} = editorUseStore()

    const updateCodeSyntaxHighlighting = () => {
        document.querySelectorAll("pre code").forEach(block => {
            hljs.highlightBlock(block as HTMLElement)
        })
    }

    useEffect(() => {
        updateCodeSyntaxHighlighting()
    })

    return (
        <article className={'editor-preview-article'}>
            <h1 className={'editor-preview-article-title'}>{title}</h1>
            <Markdown>
                {rawMarkdown}
            </Markdown>
        </article>
    )
}

export default EditorPreview;
