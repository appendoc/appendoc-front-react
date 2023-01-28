import React from "react";
import './AppendocButton.css';

type ButtonProps = {
    buttonText: string,
    link?: string,

    onClick?: () => void,
}

const AppendocButton = (props: ButtonProps) => {
    return (
        <a href={props.link} onClick={() => {
            if (props.onClick != null) {
                props.onClick()
            }
        }}>
            <div className={'appendoc-button'}>
                {props.buttonText}
            </div>
        </a>
    )
}

export default AppendocButton;
