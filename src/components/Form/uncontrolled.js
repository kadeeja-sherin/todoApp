import React,{Component} from "react";

class Form extends React.Component{

    constructor(props){
        super(props);
        this.updateSubmit=this.updateSubmit.bind(this);
        this.input=React.createRef();

    }


    updateSubmit(event){
        alert("you have entered username and companyname");
        event.preventDefault();
    }

    render(){
        return(



            <Form onSubmit={this.updateSubmit}>

                <h1>Uncontrolled form example</h1>
                <label>Name:<input type="text" ref={this.input}></input></label>
                <label>companyName:<input type="text" ref={this.input }></input></label>
                <input type="submit" value="submit"></input>
            </Form>
        )
    }
}
export default Form;

