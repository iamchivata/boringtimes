import React from 'react';
import './App.css';
import './bootstrap.min.css';


class App extends React.Component{
  constructor(props){
    super(props);
    this.componentDidMount=this.componentDidMount.bind(this);
    this.state={
        suggestion:[]
    }
    }
    componentDidMount(e){
        fetch("http://www.boredapi.com/api/activity")
        .then(res=>res.json())
        .then(
            json=>{
                this.setState({
                    suggestion:json.activity
                })
            }
        )
    }
    render(){
        return(
          <div className="maindiv">
              <div className="container">
                  <div className="row">
                     <div className="col-xl col"><p className="bored">i'm bored...</p></div> 
                     <div className="col-xl col"></div> 
                  </div>
              </div>
        <div className="container">  
        <div className="row">
                <div className="col-xl col"> </div>
                <div>
                    <button onClick={(e)=>this.componentDidMount(e)} className=" col-xl col-8.5 whattodo">click here</button>
                </div>
                <div className="col-xl col"></div>
        </div>       
            
        </div>
        
        <div className="container">
        <div className="row">
                <div className="col-xl-3"></div>
                <div className="col-xl-6"><p className="suggestion">{this.state.suggestion}</p></div>
                <div className="col-xl-3"></div>
        </div>
        </div>
        
        <div className="byme">by 
        <a href="https://twitter.com/chivaata_" target="blank"> shivatavakol</a>
        <a></a>
        </div>
        </div>
 
        )
    }
}
 
export default App;