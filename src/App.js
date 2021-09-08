import logo from './logo.svg';
import './App.css';
import React,{ Component } from 'react';
import {Cardlist} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
class App extends Component{
  constructor(){
    super();
    this.state={
      String:'Surya',
      monsters:[],
      SearchField:'',
      DateField:'',
    };
  }
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(user=>this.setState({monsters:user}));
  }


  render(){
    const {monsters,SearchField}=this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(SearchField.toLowerCase())
      );
    return (
    <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Monsters Rolodex</h1>
        <SearchBox
        placeholder='search monsters'
        handleChange={e => this.setState({SearchField:e.target.value})}
        />
        <Cardlist monster={filteredMonsters}>
          </Cardlist>
    </div>
  );}
}

export default App;
