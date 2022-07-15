import axios from "axios";
import icon from "../../assets/img/notification-icon.svg";
import { BASE_URL } from "../../utils/request";
import "./styles.css";


type Props = {
    saleId: number;
}

function handleClique(id :number){
    axios(`${BASE_URL}/sale/${id}/notification`) 
        .then(response => {
            console.log("SUCESSO");
        })  
}


function NotificationButton( {saleId} : Props) {
    return(
        <div className="dsmeta-red-btn" onClick={() => handleClique(saleId)}>
            <img src={icon} alt="Notificar"/>
        </div>
    )
  }
  
export default NotificationButton;
  