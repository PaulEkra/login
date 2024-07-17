import "./style.modules.css"
import {  Link, useNavigate } from "react-router-dom";
export function PageNotFound(){
    const nav=useNavigate()
return (
    <div className="error-container">
      <img className="error-image" src="https://img.freepik.com/vecteurs-libre/glitch-error-404-page_23-2148105404.jpg?t=st=1721047006~exp=1721050606~hmac=bbdfe1888bf40f5f95a571d47417585d305bd26d7756bc5a3552a621aa46da66&w=826" alt="Erreur 404" />
      <div className="error-message">Oops ! Page non trouvée</div>
      <div className="error-description">Désolé, la page que vous recherchez n'a pas été trouvée.</div>
      <Link to={"/"} className="back-home-button">Retourner à l'accueil</Link>
    </div>
  );
};