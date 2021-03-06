import React from "react"

class DataPoint extends React.Component {

   render(){
    
    return (

       <div className="flex items-center justify-center w-1/2 border-solid border-l-2 border-gray-400 border-t-2 border-b-2 h-full">
           <p className="text-sm md:text-base text-center text-blue-900 font-bold my-auto">{this.props.text}</p>
        </div>

  	)
  	}

}

export default DataPoint
