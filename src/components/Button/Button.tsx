type ButtonProps = {
    onClick: () => void;
    children: React.ReactNode;
};

export const Button = ({ onClick, children }: ButtonProps) => {
    return <button style={{width:'100%'}} type="button" onClick={onClick}>{children}</button>;
};