import React, { Component } from 'react';

class Boss extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            isShow:true,
         }
    }
    render() { 
        return ( 
            <div>
                <div className={this.state.isShow?'show':'hide'}>BOSS级人物-孙悟空</div>
                <div><button>召唤Boss</button></div>
            </div> 
        );
    }
    toToggole(){
        this.setState({
            isShow:this.state.isShow ? false : true
        })
    }
}
 
export default Boss;