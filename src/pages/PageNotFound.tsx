import React from "react";

const AppendocNavigation = React.lazy(() => import('../moles/AppendocNavigation'))

const PageNotFound = () => {
    return (
        <>
            <AppendocNavigation/>
            <h1 style={{color: 'white'}}>페이지를 찾을 수 없어요. 그리고 이 페이지는 완성되지 않았어요.</h1>
        </>
    )
}

export default PageNotFound
