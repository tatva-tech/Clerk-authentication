interface Props {
    children: React.ReactNode;
}

const AuthLayout = ({ children }: Props) => {
    return ( 
        <div className="h-full flex justify-center items-center">
            {children}
        </div>
     );
}
 
export default AuthLayout;