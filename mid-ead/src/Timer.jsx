function Timer(){
    return(
        <button onClick={()=>{if(count<=9)setTimeout(count)}}>timer</button>
    )
}