function Backdrop({children, close}) {

    return (
        <div className="backdrop" onClick={(e) => {
            if( e.target.className === 'backdrop' ) close()
        }}>{children}</div>
    );

}

export default Backdrop;