   import React, { Component } from 'react'
   import TakeMessage from './TakeMessage'
   import DisplayMessage from './DisplyMessage'
   
   export default class MessageList extends Component {  
    state={
        MessageList:[]
    }
    addMessage=(s)=>{
        this.setState({
            MessageList:[...this.state.MessageList,s]
        })                        
    }
     render() { 
        //  console.log("messagelistttt",this.state.MessageList)                  
       return (
         <div>
            <TakeMessage onSubmit={this.addMessage} />
            {
                this.state.MessageList.map((m)=>(
                    <DisplayMessage showMessage={m.text}/>
                ))
            }
         </div>
       )
     }
   }
   


 
    
