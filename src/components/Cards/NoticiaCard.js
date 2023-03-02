import {
  Card,
  CardImg,
  Badge,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
} from "reactstrap";

const NoticiaCard = (props) => {
  return (
    <Card
      key={props._id}
      id={props._id}
      style={{
        maxWidth: "430px",
        maxHeight: "570px",
        margin: "auto",
        boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px",
        borderColor: "#D4D4D4",
      }}
    >
      <CardImg
        alt="img:("
        src={props.img}
        top
        width="100%"
        crossOrigin="anonymous"
      />
      <Badge color="info">
        {" "}
        <i className="now-ui-icons location_pin"></i>
        {props.ubicacion}
      </Badge>
      <h6>{props.fecha}</h6>
      <CardBody>
        <CardTitle tag="h5">{props.titular}</CardTitle>
        {props.subtitulo ? (
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            {props.subtitulo}
          </CardSubtitle>
        ) : (
          ""
        )}

        <CardText>{props.cuerpo}</CardText>
        <Button>Ver más..</Button>
      </CardBody>
    </Card>
  );
};

export default NoticiaCard;
