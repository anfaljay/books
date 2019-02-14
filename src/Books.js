import React, { Component } from 'react';


class Books extends Component {

    state={
        hide:false
      }
      hideBook=()=>{
          console.log("clicked")
        if(this.state.hide===false){
          this.setState({hide:'hidden'})
        }else{
          this.setState({hide:false})
        }
      }
  
    render(){
  
  
    return (
        <div>
        <h1 onClick={this.hideBook}> {this.props.book.isbn} </h1>
        {this.props.book.title}  
        {this.props.book.subtitle}
        {this.props.book.author}
        {this.props.book.published}
        {this.props.book.publisher}
        {this.props.book.pages}
        {this.props.book.description}
        <a src = {this.props.book.website}/>
        <img class={this.state.hide} src={this.props.book.image}/>

     </div>
  )};
}

export default Books ;