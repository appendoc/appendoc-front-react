import React from "react";

import './AppendocNavigation.css'
import appendocLogo from '../assets/logo/Appendoc.svg'
const Icon = React.lazy(() => import('../components/Icon'))
const LinkWithSvgLogo = React.lazy(() => import('../components/LinkWithSvgLogo'))
const NavigationLinks = React.lazy(() => import('../components/NavigationLinks'))

const AppendocNavigation = () => {

    return (
        <header className={'appendoc-header'}>
            <LinkWithSvgLogo link={"/"} logoUrl={appendocLogo}/>
            <NavigationLinks links={
                [
                    {title: '최근 변경', href: '#'},
                    {title: '새 문서 작성하기', href: '/edit'},
                    /*{title: '최근 토론', href: '#'},
                    {title: '기여가 필요한 문서', href: '#'},*/
                ]
            }/>
            <Icon href={"#"} iconName={"manage_accounts_white_24dp.svg"}/>
        </header>
    );
}

export default AppendocNavigation;
