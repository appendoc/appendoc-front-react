import React from "react";
import './AppendocInput.css';

type InputProps = {
    text?: string,
    placeholder?: string
    readonly: boolean,
    onChange?: (text: string) => void
}

const AppendocInput = (props: InputProps) => {

    return (
        <div className={'appendoc-input-wrapper'}>
            <input
                value={props.text}
                readOnly={props.readonly}
                placeholder={props.placeholder}
                onChange={e => {
                    if (props.onChange != null) {
                        props.onChange(e.target.value)
                    }
                }}
            />
        </div>
    )
}

export default AppendocInput;
