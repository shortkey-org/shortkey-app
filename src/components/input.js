import { forwardRef } from "react";

export const InputTypes = {
    normal: '--normal --dims',
    noborder: '--normal --dims --no-border'
}

const Input = forwardRef(({
    icon = undefined,
    className = undefined,
    placeholder = undefined,
    type = InputTypes.normal,
    htmlType = 'text',
    children,
    innerChildren,
    tagName = 'input',
    ...props
}, ref) => {

    const Component = tagName;

    return (
        <div
            className={"form-control " + type + (className ? " " + className : "")}>

            {icon && <div
                className={("ic-container") + " mr-r"}>
                    {icon}
            </div>}

            <div
                className="input-control-container">
                <Component
                    ref={ref}
                    {...props}
                    placeholder={placeholder}
                    type={htmlType}
                    className={("input-control") + (icon ? " --ic" : "")}>{innerChildren}</Component>
            </div>

            {children}

        </div>
    );

});

export default Input;