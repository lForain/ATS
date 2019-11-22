import React, { Component } from "react";
import "materialize-css/dist/js/materialize";
import "materialize-css/dist/css/materialize.min.css";
import { makeStyles } from "@material-ui/core/styles";
import Popover from "@material-ui/core/Popover";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  typography: {
    padding: theme.spacing(2)
  }
}));

export default function Contato() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div className="row">
      <div className="col offset-s1">
        {" "}
        <h2> Contato </h2>{" "}
      </div>

      <div className="row">
        <div className="col offset-s3 col s6">
          <p className="flow-text">
            Olá, aqui no estúdio do Seu Armando prezamos pela sua satisfação.
            Por isso estamos sempre ansiosos para receber seu feedback ou
            responder qualquer dúvida que você possa ter. Portanto sinta-se a
            vontade a nos contatar por qualquer um dos métodos abaixo:
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col offset-s1">
          <h5>Endereço:</h5>
          <p>Rua Exemplo, número 0</p>
        </div>

        <div className="col offset-s1">
          <h5>Instagram:</h5>
          <p>instagram.com/estudioSeuArmando</p>
        </div>

        <div className="col offset-s1">
          <h5>Whatsapp:</h5>
          <p>(21) 99999-9999</p>
        </div>

        <div className="col offset-s1">
          <h5>Email:</h5>
          <p>estudioseuarmando@gmail.com</p>
        </div>
      </div>

      <div className="row">
        <div className="col s10 offset-s2">
          {/* Mapinha de localização: */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470400.415011124!2d-43.72686925206521!3d-22.913251255643985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bde559108a05b%3A0x50dc426c672fd24e!2sRio%20de%20Janeiro%2C%20RJ!5e0!3m2!1spt-BR!2sbr!4v1574366181322!5m2!1spt-BR!2sbr"
            width="800"
            height="600"
            frameborder="0"
            allowfullscreen=""
          ></iframe>
        </div>
      </div>

      <div className="row">
        <form className="col s8 offset-s2">
          <p className="flow-text">
            {" "}
            Ou entre em contato conosco por email mandando a mensagem abaixo:{" "}
          </p>

          {/* Campo do corpo do Email */}
          <div className="input-field">
            <textarea
              id="textarea1"
              name="corpoEmail"
              className="materialize-textarea"
            />
            <label htmlFor="textarea1"> Texto do E-mail: </label>
          </div>

          {/* Botão de Enviar */}
          <div className="row">
            <div className="col offset-s1">
              <Button
                aria-describedby={id}
                variant="contained"
                color="primary"
                onClick={handleClick}
              >
                Enviar
              </Button>
              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center"
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center"
                }}
              >
                <Typography className={classes.typography}>
                  Mensagem enviada com sucesso
                </Typography>
              </Popover>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
