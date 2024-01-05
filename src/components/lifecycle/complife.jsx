import React from "react";
import  ReactDOM  from 'react-dom';


class CompLife extends React.Component{
    constructor(props){
        super(props);
        this.state={name:''};
        this.updateName=this.updateName.bind(this);
        this.testClick=this.testClick.bind(this);

    }

    updateName(event){
        this.setState({name:event.target.value});
    }
 
    testClick(event){
        alert("The name entered is:"+this.state.name);
    }

    componentDidMount(){
        console.log('mounting state:calling methods componentDidMount');
    }

    shouldComponentUpdate(){
        console.log('updating state:calling method shouldComponentUpdate');
        return true;
    
    }

    componentDidUpdate(){
        console.log('update state: componentDidUpdate');

     }

     componentWillUnmount(){
        console.log('unmounting state:calling method componentWillUnmount');
     }




    render(){
        return(
            <div>
                Enter your name:<input type="text" value={this.state.name} onChange={this.updateName}></input><br/>
                <input type="button" value="Click Here" onClick={this.testClick}></input>
                <h2>{this.state.name}</h2>
            </div>
        )
    }
}
export default CompLife;