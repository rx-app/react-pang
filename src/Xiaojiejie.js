import React, { Component, Fragment } from 'react'
import './style.css'
import XiaojiejieItem from './XiaojiejieItem'



class Xiaojiejie extends Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: 'xx',
            list: ['基础按摩', '精油推背']
        }
    }
    render() {
        return (
            <Fragment>
                <div>
                    <label htmlFor="jspang">加入服务：</label>
                    <input id="jspang" className="input" value={this.state.inputValue} onChange={this.inputChange.bind(this)} />
                    <button onClick={this.addList.bind(this)}> 增加服务 </button>
                </div>
                <ul>
                    {
                        this.state.list.map((v, i) => {
                            // return <li onClick={this.deleteItem.bind(this, i)} key={i + v}>{v}</li>
                            return <XiaojiejieItem deleteItem={this.deleteItem.bind(this)} key={i+v} index={i} content={v} />
                        })
                    }
                    {/* <li>头部按摩</li>
                    <li>精油推背</li> */}
                </ul>
            </Fragment>
        )
    }
    
    deleteItem(i) {
        let list = this.state.list
        list.splice(i, 1)
        this.setState({ list })
    }
    inputChange(e) {
        this.setState({
            inputValue: e.target.value
        })
    }
    addList() {
        this.setState({
            list: [...this.state.list, this.state.inputValue]
        })
    }
}
export default Xiaojiejie 