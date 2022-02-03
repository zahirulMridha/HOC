import React from "react";

 function Hoc(Func) {
  class NewFunc extends React.Component {

   state = {
      sum:0,
   };
   changer = () => {
      this.setState((prevSum) => ({sum : prevSum.sum + 1 }));
   };
   render() {
      const {sum} = this.state
      return(
         <Func sum ={sum} changer = {this.changer} />
      )
   }
  };
  return NewFunc
}

export default Hoc ;