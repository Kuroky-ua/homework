import React, {Component} from "react";
import './App.css';
import  Car from './Car/Car'

class App extends Component {

    state = {
        cars : [
            {name :'Ford', year: "2018"},
            {name :'Audi', year: "2016"},
            {name :'Mazda', year: "2010"}
        ],
        pageTitle: 'React components'
    }

    changeTitleHandler = (newTitle) => {

        // const oldTitle = this.state.pageTitle
        //
        // const newTitle = oldTitle + '(changed)'

        this.setState({
            pageTitle: newTitle
        })

    }
    HandlerInput = (event) => {
        // console.log('changed', event.target.value)
        this.setState({
            pageTitle:  event.target.value
        })
    }
    render() {
        console.log('render')
        const divStyle = {
                textAlign: 'center'
            }

        return (
            <div style={divStyle}>
                <h1>{this.state.pageTitle}</h1>
                <input type='text' onChange={this.HandlerInput}/>
                <button onClick={this.changeTitleHandler.bind(this, 'Changed')}
                >Change title</button>


                { this.state.cars.map((car,index) => {
                  return (
                      <Car
                      key={index}
                      name={car.name}
                      year={car.year}
                      onChangeTitle={() => this.changeTitleHandler(car.name)}
                      />
                  )
                }) }
            </div>
        );
    }
}


// 3  Теория   работа с списком 
export default App;
