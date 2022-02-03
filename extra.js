import Hoc from "./hoc"
function  Extra({changer,sum}) {
   return (
      <h3 onClick={changer}> quia, impedit voluptate ex. Quos, doloremque asperiores! {sum} Doloribus, consequatur.</h3>
   )
}

export default Hoc(Extra)