import Hoc from "./hoc"

const Hover = ({changer,sum}) =>  {
 
      return(
        <div>
           <p onMouseOver={changer} >
            Lorem ipsum dolor sit. {sum} </p>
        </div>
      );
   }

export default  Hoc(Hover);