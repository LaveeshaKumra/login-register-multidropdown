import React,{Component} from 'react';
import axios from 'axios';
export default class RegisterComponet extends Component {
    constructor(){
        super();
        this.state={
            name:"",
            password:""
        };
    }

    onChangeName=e=>{
        e.preventDefault();
        this.setState({
            name:e.target.value
        });
    };

    onChangePassword=e=>{
        e.preventDefault();
        this.setState({
            password:e.target.value
        });
    };

    onSubmit=e=>{
        e.preventDefault();
        const data={
            name:this.state.name,
            password:this.state.password
        }
        axios.post('http://localhost:4200/login',data).then(res => {
            console.log(res);        
        this.setState({
            name: "",
            password: ""
        });
        if(res){
            
        }

    }).catch(err => console.log(err));
    };

    render(){
            return (
                <div>
                    <form onSubmit={this.onSubmit}>
                    Username:<input type="text" name="name" value={this.state.name} onChange={this.onChangeName} />
                        <br/>
                        Password:<input type="password" name="password" value={this.state.password} onChange={this.onChangePassword} />
                        <br/>
                        <input type="submit" value="Login" />

                    </form>
                </div>
            );
        }
}