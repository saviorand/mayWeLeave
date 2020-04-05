import React from "react"

class DataConditional extends React.Component {


  constructor(props){
  super(props);
  
  }

   render(){

   let myDaysRemaining = this.props.text;
   let myRegex = /[1-9]+/g;
   let myMatch = JSON.stringify(myDaysRemaining).match(myRegex);
   let theNumber = parseInt(myMatch);
   let countedDown = (theNumber - 0);

   let finalCount = (JSON.stringify(myDaysRemaining).replace(myMatch, countedDown).replace('"', ''));

  
    return (

       <div className="flex items-center w-1/2 justify-center border-solid rounded-r-md border-gray-300 border-2 h-full">
           <p className="text-base text-center text-blue-900 font-medium my-auto">{finalCount.replace('"', '').replace('NaN', '')}</p>
        </div>

  	)
  	}

}

export default DataConditional
