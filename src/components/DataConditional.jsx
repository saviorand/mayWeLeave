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
   let countedDown = (theNumber - 1);

   let finalCount = (JSON.stringify(myDaysRemaining).replace(myMatch, countedDown).replace('"', ''));

  
    return (

       <div className="mx-8 p-2 my-1 rounded-md border-solid border-gray-300 border-2">
           <p className="text-base text-blue-900 font-medium">{finalCount.replace('"', '').replace('NaN', '')}</p>
        </div>

  	)
  	}

}

export default DataConditional
