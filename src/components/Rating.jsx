

function Rating(props){
    const rate = [];
    for (let index = 0; index < 6; index++) {
        if (props.rating>index) {
            rate.push("fa fa-circle")
        }
        if(props.rating<index){
            rate.push("fa fa-circle-o")
        }
        
    }
    return(
        <div className="flex flex-1 gap-2">
            <i className={rate[0]}></i>
            <i className={rate[1]}></i>
            <i className={rate[2]}></i>
            <i className={rate[3]}></i>
            <i className={rate[4]}></i>
        </div>
    )
}

export default Rating;