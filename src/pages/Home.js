import React, { Component } from 'react';




export default class Home extends Component {
    state = { 
    }
    render () {                                   
       return (
         <div id='container'>
            <a href="signup">Goals</a>
            <a href="signup" >Sign Up</a>
            <a href="planets">Planets</a>
            <a href="users">Users</a>
           
         </div>
       )

       
    }
 }