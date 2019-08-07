console.log('app.js is running!')

//Creat ap object title/subtitle
//Use title/subtitle in the template
//Render template

let app={
    title: 'Indecision App',
    subtitle: 'This is some info',
    options: []

}

//JSX - JavaScript XML

const onFormSubmit = (e)=>{
    e.preventDefault();
    
    const option = e.target.elements.option.value

    if(option){
        app.options.push(option)
        e.target.elements.option.value = ''
        renderApp()
    }
}


const onRemoveAll = ()=>{
    app.options = []

    renderApp()
}

const onMakeDecision = ()=>{
    const randomNum = Math.floor (Math.random() *app.options.length);
    const option = app.options[randomNum]
    console.log(option)
}



const appRoot = document.getElementById('app')

const renderApp = ()=>{
    let template = (
        <div>
            <h1>{app.title}</h1> 
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length >0 ?'Here is your options' : 'No options'}</p>
            <button disabled={app.options.length ===0} onClick={onMakeDecision}>What should I do?</button>
            
            <button onClick={onRemoveAll}>Remove All</button>   
            <ol>
                { 
                    app.options.map((option)=>{
                        return <li key={option}>{option}</li>
                    })
                }
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add Option</button>
            </form>
        </div>
    )
    ReactDOM.render(template, appRoot)
}

renderApp()
