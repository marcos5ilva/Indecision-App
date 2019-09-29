// const appRoot = document.getElementById('app')
// let disable = true;
// const onShowDetails = ()=>{
//     disable = !disable
//     console.log(disable)
//     renderApp()
// }

// const renderApp = ()=>{
//     let template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button  onClick={onShowDetails}>{disable?  'Show details':'Hide details'}</button>
//             <p hidden = {disable}>Here are some details</p>
//         </div>
//     )

//     ReactDOM.render(template, appRoot)
// }

// renderApp()

class Visibility extends React.Component{
    constructor(props){
        super(props);

        this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
        this.state = {
            visibility:false,
        }
    }

    handleToggleVisibility(){
        this.setState((prevState)=>{
            return{
                visibility: !prevState.visibility,
            }
        });
    }

    render(){
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button  onClick={this.handleToggleVisibility}>{this.state.visibility?  'Show details':'Hide details'}</button>
                <p hidden = {this.state.visibility}>Here are some details</p>
            </div>
        );
    }

}

ReactDOM.render(<Visibility />, document.getElementById('app'));