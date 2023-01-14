import React from "react";

type IconProps = {
    href: string,
    iconName: string,
}

const Icon = (props: IconProps) => {
    return (
        <a href={props.href}>
            <img src={`./icon/${props.iconName}`}/>
        </a>
    )
}

export default Icon;
