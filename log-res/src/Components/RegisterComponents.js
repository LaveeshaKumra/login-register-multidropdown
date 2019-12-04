import React, { Component } from 'react';
import axios from 'axios';
export default class RegisterComponents extends Component {
    constructor() {
        super();
        this.state = {
            name: "",
            password: "",
            email: "",
            mobileno: "",
            statename:"",
            countryname: "",
            cityname:"",
            states:[],
            cities:[],
            countries:[]
        };
    }

    componentWillMount(){

        axios.get(`http://localhost:4200/getcountries`)
		.then(res => { 
		   if(res){
               this.setState({countries:res.data});
		   }
		})
        .catch(err => console.log(err));
		
    }
    

    onChangeName = e => {
        e.preventDefault();
        this.setState({
            name: e.target.value
        });
    };

    onChangePassword = e => {
        e.preventDefault();
        this.setState({
            password: e.target.value
        });
    };

    onChangeNumber = e => {
        e.preventDefault();
        this.setState({
            mobileno: e.target.valuestate
        });
    };

    onChangeEmail = e => {
        e.preventDefault();
        this.setState({
            email: e.target.value
        });
    };

    onChangeState = e => {
        e.preventDefault();
        this.setState({
            statename: e.target.value
        });
        console.log(this.state.statename);

        axios.get(`http://localhost:4200/getcities/${this.state.statename}`)
		.then(res => { 
		   if(res){
               this.setState({cities:res.data});
		   }
		})
		.catch(err => console.log(err));
    };

    onChangeCountry = e => {
        e.preventDefault();
        this.setState({
            countryname: e.target.value
        });
        console.log(this.state.countryname);

        axios.get(`http://localhost:4200/getstates/${this.state.countryname}`)
		.then(res => { 
		   if(res){
               console.log(res.data);
               this.setState({states:res.data});
		   }
		})
        .catch(err => console.log(err));
    };

    onChangeCity = e => {
        e.preventDefault();
        this.setState({
            cityname: e.target.value
        });
        console.log(this.state.cityname);
    };

    onSubmit = e => {
        e.preventDefault();
        const data={
            name:this.state.name,
            password:this.state.password,
            email:this.state.email,
            mobileno:this.state.mobileno,
            statename:this.state.statename,
            countryname:this.state.countryname,
            cityname:this.state.cityname
        }
        // const data = new FormData();
        // data.append("name", this.state.name);
        // data.append("password", this.state.password);
        // data.append();
        // data.append("mobileno", this.state.mobileno);
        // console.log(data);

        axios.post('http://localhost:4200/register',data).then(res => {
            console.log(res);        
        this.setState({
            name: "",
            password: "",
            email: "",
            mobileno: "",

        });

    }).catch(err => console.log(err));
    };


    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    Username:<input type="text" name="name" value={this.state.name} onChange={this.onChangeName} />
                    <br />
                    <br/>
                    Password:<input type="password" name="password" value={this.state.password} onChange={this.onChangePassword} />
                    <br />
                    <br/>
                    Email:<input type="text" name="email" value={this.state.email} onChange={this.onChangeEmail} />
                    <br />
                    <br/>
                    Mobile No:<input type="text" name="mobile" value={this.state.mobileno} onChange={this.onChangeNumber} />
                    <br/>
                    <br/>
                    Select Country:<select name="countryname"  onChange={this.onChangeCountry} value={this.state.countryname}>
                        <option>Select a country</option>
                    {this.state.countries.map((item, index) => {
                        return <option key={index} value={item.countryid}>{item.name} {item.countryid}</option>
                    }) } 

                    </select>
                    <br/>
                    <br/>
                    Select State:<select name="statename"  onChange={this.onChangeState} value={this.state.statename}>
                        <option>Select state</option>
                    {this.state.states.map((item, index) => {
                        return <option key={index} value={item.stateid}>{item.state}</option>
                    }) } 

                    </select>

                    <br/>
                    <br/>
                    Select City:<select name="cityname"  onChange={this.onChangeCity} value={this.state.cityname}>
                        <option>Select city</option>
                    {this.state.cities.map((item, index) => {
                        return <option key={index} value={item.name}>{item.name}</option>
                    }) } 

                    </select>
                    <br/>
                    <br/>

                    <input type="submit" value="Register" />

                </form>
            </div>
        );
        
    }
}