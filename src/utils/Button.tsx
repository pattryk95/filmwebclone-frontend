export default function Button(props: buttonProps){
    return <button
    type={props.type}
    disabled={props.disable}
    className='btn btn-primary'
    onClick={props.onClick}
    >{props.children}</button>

}

interface buttonProps{
    children: React.ReactNode;
    onClick?(): void;
    type:"button" | "submit";
    disable: boolean;
}

Button.defaultProps = {
    type: "button",
    disable: false
}