import Hoc from "./hoc";

const Click = ({changer,sum}) => {
      return(
        <div>
           <button type="button" onClick={changer}>
            click here {sum} </button>
        </div>
      );
   }

export default Hoc(Click)