import React, {useEffect} from 'react';
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";

const AppendocWikiViewer = React.lazy(() => import('./pages/AppendocWikiViewer'))
const AppendocEditor = React.lazy(() => import('./pages/AppendocEditor'))
const PageNotFound = React.lazy(() => import('./pages/PageNotFound'))

const App = () => {
    useEffect(() => {
        const currentEnv = import.meta.env.MODE
        console.log(currentEnv)
        if (currentEnv === 'development') {
            console.warn(`[주의] 현재 환경은 ${currentEnv}입니다.`)
            console.warn(`[노트] 개발환경에서는 React.StrictMode로 인해 렌더링이 두 번 됩니다. 따라서 중복되는 API 콜이 발생할 수 있어요.`)
        }
    })

    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<Navigate to={"/w/메인"}/>}/>
                <Route path={"/*"} element={<Navigate to={"/page-not-found"}/>}/>
                <Route path={"/page-not-found"} element={<PageNotFound/>}/>
                <Route path={"/w/:documentName"} element={<AppendocWikiViewer/>}/>
                <Route path={"/edit"} element={<AppendocEditor/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default App
