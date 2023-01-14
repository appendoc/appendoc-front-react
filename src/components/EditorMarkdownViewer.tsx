import React from "react";
import './EditorMarkdownViewer.css';
import {editorUseStore} from "../pages/AppendocEditor";

const EditorMarkdownViewer = () => {
    return (
        <div className={'editor-md'}>
            <textarea
                placeholder={'문서를 작성해볼까요?'}
                className={'editor-md-txt'}
                onChange={e => {
                    editorUseStore.setState({rawMarkdown: e.target.value})
                }}
            />
        </div>
    )
}

export default EditorMarkdownViewer;