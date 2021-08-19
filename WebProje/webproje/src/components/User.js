import React, {Component} from "react";

class User extends Component {
    render(){
        return(
            
            <div className ="card">
                <h4 className="card-header"> User Login </h4>
                <div className="card-body">
                    <form>
                        <div className="form-group">
                            <label gtmlFor = "name">Name :</label>
                            <input type="text" name="name" id="nameid" placeholder="Enter Name" className="form-control"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor = "password">Password :</label>
                            <input type="password" name="password" id="passwordid" placeholder="Enter Password" className="form-control"/> 
                        </div>
                        <div className="form-group">
                        <input type="checkbox" id="showPassword" onclick = "Toggle()"/>
                            <label for="showPassword">Show password</label>
                            
                        </div>

                        <div>
                            
                        <button type="submit" name ="button1"className= "btn btn-danger btn-block active"   >Login!</button>
                        </div>
                        
                        
                         
                    </form>
                    
                                
                </div>
                
            </div>
        
        )
     

    }

}


export default User;
