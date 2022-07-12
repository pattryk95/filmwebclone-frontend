export default function Button(props: buttonProps){
    return <button
    type={props.type}
    disabled={props.disable}
    className={props.className}
    onClick={props.onClick}
    >{props.children}</button>

}

interface buttonProps{
    children: React.ReactNode;
    onClick?(): void;
    type:"button" | "submit";
    disable: boolean;
    className: string;

}

Button.defaultProps = {
    type: "button",
    disable: false,
    className: "btn btn-primary"

}