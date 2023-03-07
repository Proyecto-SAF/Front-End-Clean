import {
  Badge,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";

import "../Cards/NoticiaCard.css"

const NoticiaCard = (props) => {
  return (
    <div class="card">
      <img
        className="card-img-top"
        key={props._id}
        alt="img:("
        src={props.img}
        crossOrigin="anonymous"
      />
      <div className="card-body">
      <Badge color="info">
        <i className="now-ui-icons location_pin"></i>
        {" " + props.ubicacion}
      </Badge>
      <h6>{props.fecha}</h6>
        <h5>{props.titular}</h5>
        {props.subtitulo ? (
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {props.subtitulo}
          </CardSubtitle>
        ) : (
          ""
        )}
        <button className="button">Leer más..</button>
      </div>
    </div>
  );
};

export default NoticiaCard;
