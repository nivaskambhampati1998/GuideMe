import React from 'react';
// from django.core.mail import send_mail;
class Contact_reply extends React.Component{
    constructor(){
        super();
        this.state={
            name:'',
            email:'',
            subject:'',
            message:'',
            reply:''
        }
        this.changeHandler=this.changeHandler.bind(this);
        this.submitForm=this.submitForm.bind(this);
    }

    // Input Change Handler
    changeHandler(event){
        this.setState({
            [event.target.name]:event.target.value
        });
    }

    // Submit Form
    submitForm(){
        // var id=this.props.match.params.id;
        // fetch('http://127.0.0.1:8000/contact/'+id+'/',{
        //     method:'PUT',
        //     body:JSON.stringify(this.state),
        //     headers:{
        //         'Content-type': 'application/json; charset=UTF-8',
        //     },
        // })
        // .then(response=>response.json())
        // .then((data)=>console.log(data));
        // email_subject = 'Regarding '+this.state.subject
        // email_body = 'Hi '+this.state.name+',\n'+this.state.reply
        
        // send_mail(email_subject,email_body,'projectguy.temp@gmail.com',[this.state.email,])
    }

    fetchData(){
        var id=this.props.match.params.id;
        fetch('http://127.0.0.1:8000/contact/'+id)
        .then(response=>response.json())
        .then((data)=>{
            this.setState({
                name:data.name,
                email:data.email,
                subject:data.subject,
                message:data.message,
                reply:''
            });
        });
    }

    componentDidMount(){
        this.fetchData();
    }

    render(){
        return (
            <table className="table table-bordered" style={{marginTop:'100px'}}>
                <tbody>
                    <tr>
                        <th>Name</th>
                        <td>
                            <input value={this.state.name} name="name" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Email</th>
                        <td>
                            <input value={this.state.email} name="email" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Subject</th>
                        <td>
                            <input value={this.state.subject} name="subject" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Message</th>
                        <td>
                            <input value={this.state.message} name="message" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <th>Reply</th>
                        <td>
                            <input value={this.state.reply} name="reply" onChange={this.changeHandler} type="text" className="form-control" />
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <input type="submit" onClick={this.submitForm} className="btn btn-dark" />
                        </td>
                    </tr>
                </tbody>
            </table>
        );
    }
}

export default Contact_reply;