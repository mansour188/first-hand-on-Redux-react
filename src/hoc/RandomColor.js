const RandomColor=(WrappedComponement)=>{

    const colors=["red","orange","pink","blue"]
    const randomC=colors[Math.floor(Math.random()*3)]
    const ClassName=randomC+'-text'
    return (props)=>{
       return (
        <div className={ClassName}>
        <WrappedComponement {...props}/>
    </div>
       )
    }
}
export default RandomColor