import React, { Component } from 'react';
import PropTypes from 'prop-types'

class XiaojiejieItem extends Component {
    constructor(props){
        super(props)
        // this.handleClick=this.handleClick.bind(this)
    }
    render() { 
        return ( <div onClick={this.handleClick}>{this.props.content}</div> );
    }
    componentWillUnmount(){
        console.log('child - componentWillUnmount')
    }
    handleClick=()=>{
        this.props.deleteItem(this.props.index)
    }
}

XiaojiejieItem.propTypes={
    content:PropTypes.string,
    deleteItem:PropTypes.func,
    index:PropTypes.number
}
 
export default XiaojiejieItem;