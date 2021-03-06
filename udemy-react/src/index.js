import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'
import Spinner from './Spinner';

class App extends React.Component{
    state = {lat :null,errMessage :''};

    componentWillMount(){
        window.navigator.geolocation.getCurrentPosition(
            
            (position) => this.setState({lat : position.coords.latitude}),
            (err) => this.setState({errMessage: err.message })
            
        );
    }


    render(){

    if(this.state.errMessage && !this.state.lat){
        return <div>Error:{this.state.errMessage}</div>
    }
    if(!this.state.errMessage && this.state.lat){
        return <SeasonDisplay lat = {this.state.lat}/>
    }

    return <Spinner/>
    }
}
ReactDOM.render(<App/>,document.querySelector("#root"))

