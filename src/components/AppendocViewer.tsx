import React, {useEffect} from "react";
import './AppendocViewer.css'
import hljs from "highlight.js";

type AppendocViewerProps = {
    documentTitle: string,
    content: string,
}

const Markdown = React.lazy(() => import('marked-react'))

const AppendocViewer = (props: AppendocViewerProps) => {
    const updateCodeSyntaxHighlighting = () => {
        document.querySelectorAll("pre code").forEach(block => {
            console.log(block)
            hljs.highlightElement(block as HTMLElement)
        })
    }

    useEffect(() => {
        updateCodeSyntaxHighlighting()
    })

    return (
        <article className={'appendoc-wiki-article'}>
            <h1 className={'appendoc-wiki-article-title'}>{props.documentTitle}</h1>
            <div className={'appendoc-wiki-article-info'}>
                <ul>
                    <li>최근 기여자: <a href={'#'}>hyeyoom </a></li>
                    <li>최근 작성일: 2022년 4월 17일 14:14:14</li>
                </ul>
            </div>
            <nav className={'appendoc-wiki-article-nav'}>
                <ul className={'appendoc-wiki-article-nav-menu'}>
                    <li><a>태그</a></li>
                    <li><a>편집</a></li>
                    <li><a>토론</a></li>
                    <li><a>역사</a></li>
                </ul>
            </nav>
            <Markdown>
                {props.content}
            </Markdown>
        </article>
    )
};

export default AppendocViewer;
