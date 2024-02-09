import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";

export default class CreateRoomPage extends Component {
  defaultVotes = 2; // Define o número padrão de votos

  constructor(props) {
    super(props); // Chama o construtor da classe pai (Component)
    this.state = {
      guestCanPause: true, // Define o estado inicial para controle de convidado
      votesToSkip: this.defaultVotes, // Define o estado inicial para votos necessários
    };

    // Vincula o contexto do 'this' aos métodos a serem usados nos eventos
    this.handleRoomButtonPressed = this.handleRoomButtonPressed.bind(this);
    this.handleVotesChange = this.handleVotesChange.bind(this);
    this.handleGuestCanPauseChange = this.handleGuestCanPauseChange.bind(this);
  }

  // Método para manipular a mudança no número de votos
  handleVotesChange(e) {
    this.setState({
      votesToSkip: e.target.value, // Atualiza o estado com o novo número de votos
    });
  }

  // Método para manipular a mudança na opção de controle de convidado
  handleGuestCanPauseChange(e) {
    this.setState({
      guestCanPause: e.target.value === "true" ? true : false, // Atualiza o estado com a nova opção de controle de convidado
    });
  }

  // Método para lidar com o botão de criar sala pressionado
  handleRoomButtonPressed() {
    const requestOptions = {
      method: "POST", // Método HTTP POST
      headers: { "Content-Type": "application/json" }, // Tipo de conteúdo da solicitação
      body: JSON.stringify({ // Corpo da solicitação (dados do estado atual)
        votes_to_skip: this.state.votesToSkip, // Número de votos para pular
        guest_can_pause: this.state.guestCanPause, // Controle de convidado
      }),
    };
    // Faz uma solicitação POST para o endpoint '/api/create-room'
    fetch("/api/create-room", requestOptions)
      .then((response) => response.json()) // Converte a resposta para JSON
      .then((data) => this.props.history.push('/room/'+ data.code)); // Log dos dados recebidos
  }

  // Método renderizador
  render() {
    return (
      <Grid container spacing={1}> {/* Container Grid com espaçamento entre os itens */}
        <Grid item xs={12} align="center"> {/* Item Grid com alinhamento centralizado */}
          <Typography component="h4" variant="h4"> {/* Título da sala */}
            Create A Room
          </Typography>
        </Grid>
        <Grid item xs={12} align="center"> {/* Item Grid com alinhamento centralizado */}
          <FormControl component="fieldset"> {/* Componente de controle de formulário */}
            <FormHelperText> {/* Texto de ajuda */}
              <div align="center">Guest Control of Playback State</div> {/* Descrição do controle de convidado */}
            </FormHelperText>
            <RadioGroup
              row
              defaultValue="true"
              onChange={this.handleGuestCanPauseChange} // Evento para mudança no controle de convidado
            >
              <FormControlLabel
                value="true"
                control={<Radio color="primary" />} // Botão de opção para reproduzir/pausar
                label="Play/Pause"
                labelPlacement="bottom"
              />
              <FormControlLabel
                value="false"
                control={<Radio color="secondary" />} // Botão de opção para nenhum controle
                label="No Control"
                labelPlacement="bottom"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid item xs={12} align="center"> {/* Item Grid com alinhamento centralizado */}
          <FormControl> {/* Componente de controle de formulário */}
            <TextField
              required={true}
              type="number"
              onChange={this.handleVotesChange} // Evento para mudança no número de votos
              defaultValue={this.defaultVotes} // Valor padrão do campo de entrada de votos
              inputProps={{
                min: 1,
                style: { textAlign: "center" },
              }}
            />
            <FormHelperText> {/* Texto de ajuda */}
              <div align="center">Votes Required To Skip Song</div> {/* Descrição do número de votos */}
            </FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12} align="center"> {/* Item Grid com alinhamento centralizado */}
          <Button
            color="primary"
            variant="contained"
            onClick={this.handleRoomButtonPressed} // Evento para pressionar o botão de criar sala
          >
            Create A Room {/* Texto do botão de criar sala */}
          </Button>
        </Grid>
        <Grid item xs={12} align="center"> {/* Item Grid com alinhamento centralizado */}
          <Button color="secondary" variant="contained" to="/" component={Link}> {/* Botão para voltar para a página inicial */}
            Back
          </Button>
        </Grid>
      </Grid>
    );
  }
}