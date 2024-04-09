import './Button.css'

type ButtonProps = {
    size: string;
    type: string;
    arrow?: boolean;
    children: string;
}

export const Button = ({size, type, arrow, children}:ButtonProps) => {

    return <button className={`${size} ${type} ${arrow ? 'arrow' : ''} btn`}>{children}</button>
}