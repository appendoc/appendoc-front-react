import React from "react";
import './EditorHeader.css'
import {editorUseStore} from "../pages/AppendocEditor";

const EditorHeader = () => {
    const {title} = editorUseStore()
    return (
        <header className={'editor-header'}>
            <input
                placeholder={'문서의 제목을 입력해주세요.'}
                value={title}
                onChange={e => {
                    editorUseStore.setState({title: e.target.value})
                }}
            />
        </header>
    )
}

export default EditorHeader