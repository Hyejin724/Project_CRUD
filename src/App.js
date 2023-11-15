import React, {Component} from "react"
import "./App.css"
import Form from "./components/Form"

export default class App extends Component{
  render(){
    return(
      <div className="m-8 max-w-xl">
        <div className="font-bold text-3xl">예산 계산기</div>
        <div className="p-7 mt-8 bg-white rounded">
        <Form/>
        
          </div> 
          
        <div className="font-bold text-3xl mt-5 ">총지출:<input />원</div>
          </div>
    )
  }
}