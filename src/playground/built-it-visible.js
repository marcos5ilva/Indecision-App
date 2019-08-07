const appRoot = document.getElementById('app')
let disable = true;
const onShowDetails = ()=>{
    disable = !disable
    console.log(disable)
    renderApp()
}

const renderApp = ()=>{
    let template = (
        <div>
            <h1>Visibility Toggle</h1>
            <button  onClick={onShowDetails}>{disable?  'Show details':'Hide details'}</button>
            <p hidden = {disable}>Here are some details</p>
        </div>
    )

    ReactDOM.render(template, appRoot)
}

renderApp()