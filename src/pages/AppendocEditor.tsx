import React from "react";
import './AppendocEditor.css';
import {create} from "zustand";

export const editorUseStore = create(() => ({
    title: '',
    rawMarkdown: '',
}))

const EditorHeader = React.lazy(() => import('../components/EditorHeader'))
const EditorMarkdownViewer = React.lazy(() => import('../components/EditorMarkdownViewer'))
const EditorPreview = React.lazy(() => import('../components/EditorPreview'))

const AppendocEditor = () => {
    return (
        <div className={'appendoc-editor'}>
            <div className={'appendoc-editor-wrapper'}>
                <EditorHeader/>
                <div className={'appendoc-editor-body'}>
                    <EditorMarkdownViewer/>
                    <EditorPreview/>
                </div>
            </div>
        </div>
    )
}

export default AppendocEditor;
