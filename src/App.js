import React from 'react';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      data: [],
      searchRes: ''
    };
  }
// fetching json data
async componentDidMount(){
  const url = 'https://mocki.io/v1/eafa3de8-bddc-4be7-bff6-42012a91a055';
  const res = await (await fetch(url)).json();
  const ress = res.map((objMap)=>(objMap.first_name) + " " + (objMap.last_name))
  this.setState({data:ress})
}
// below code is a function to search and display search value
searchBox = (e)=> {this.setState({searchRes:e.target.value})}

render(){
  return(
    <div>
    <div>
    <h1 id = "people">PEOPLE'S NAMES</h1>
    <input type= "text" placeholder='Search' onChange={this.searchBox}></input>
      {/* <p>{this.state.searchRes}</p> */}
    </div>
    <div>
      {
        this.state.data.filter(searchData => searchData.toLowerCase().includes(this.state.searchRes.toLowerCase()))
        .map(storeMap=> <p>{storeMap}</p>)
      }
    </div>
      
    {/* this.state.data.map(ret =><p>{ret}</p>) */}
    
    </div>
    
  );
  }

}

export default App;