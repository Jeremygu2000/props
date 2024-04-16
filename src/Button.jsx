const Button = (props) => {

    const { isLoading = false, children, ...rest } = props;
    

    console.log('BUTTON PROPS>>>', props);
    console.log('BUTTON REST PROPS>>>', props);
    

    // return <button onClick={props.onClick } disabled={props.disabled}>{ props.children }</button>

    return <button {...rest }>
        {isLoading ? 'Loading...' : children}
    </button>
};

export default Button