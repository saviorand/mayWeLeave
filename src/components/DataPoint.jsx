import React from "react"

class DataPoint extends React.Component {

constructor(props){
	super(props)
};
   
   render(){
    
    return (

       <div className="mx-8 p-2 my-1 rounded-md border-solid border-gray-300 border-2">
           <p className="text-base text-blue-900 font-medium">{this.props.text}</p>
        </div>

  	)
  	}

}

export default DataPoint
