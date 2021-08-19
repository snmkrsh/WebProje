import react, {Component} from 'react';
import User from './components/User';

class App extends Component {
  
  constructor(props){
    super(props);

    this.state = {
      
    };
    
  }

  
  render(){
    const title = "User App";
    const isAuthorsized = false;
    return (

     <div className="container">
       <h4> Welcome ! </h4>
       <hr />
       <User/>
       
     </div>
    
    );

  }

}


export default App;