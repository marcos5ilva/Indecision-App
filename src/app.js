class IndecisionApp extends React.Component{
    render(){
        return (
            <div>
                <Header/>
                <Action/>
                <Options/>
                <AddOptions/>
            </div>
        )
    }
}

class Header extends React.Component{
    render(){
      return (
      <div>
      <h1>Indecision</h1>
      <p>Put your life in the hands of a computer</p>
      </div> )
    }
}

class Action extends React.Component{
    render(){
        return (
            <div>
                <button>What should I do?</button>
            </div>
        )
    }
}

//Options -> Options component here
class Options extends React.Component{
    render(){
        return ( 
           <div>
               <p>These are the options</p>
               <Option/>
           </div>
        )
    }
}

class Option extends React.Component{
    render (){
        return(
            <p>This is an option</p>
        )
    }
}

class AddOptions extends React.Component{
    render(){
        return (
            <div>
                <p>Add options</p>
            </div>
        )
    }
}



ReactDOM.render(<IndecisionApp>,</IndecisionApp>, document.getElementById('app'))