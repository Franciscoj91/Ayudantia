const Alert = ({color, children}) => {
    return (
        <>
            <div className={`alert alert-${color} my-2`}>{children}</div>
        </>
    )
}

export default Alert;