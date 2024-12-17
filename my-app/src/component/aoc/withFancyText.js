const withFancyText = (WrapedComponent) => {
    return(props)=>{
        const fancyStyle={fontStyle:"italic",fontWeight:"bold"};
        return (
            <div style={fancyStyle}>
                <WrapedComponent {...props}/>
            </div>
        )
    }
}

export default withFancyText;