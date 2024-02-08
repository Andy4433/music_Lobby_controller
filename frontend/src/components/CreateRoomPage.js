import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { Typography } from "@material-ui/core/Typography";
import { TextField } from "@material-ui/core/TextField";
import { FormHelperText } from "@material-ui/core/FormHelperText";
import { FormControl } from "@material-ui/core/FormControl";
import { Link } from "react-router-dom";
import { Radio } from "@material-ui/core/Radio";
import { RadioGroup } from "@material-ui/core/RadioGroup";
import { FormControlLabel } from "@material-ui/core/FormControlLabel";
import { FormLabel } from "@material-ui/core";

export default class CreateRoomPage extends Component {
  defa
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Grid container spacing ={1}>
        <Grid item xs={12} aling="center">
          <FormControl component="fieldset">
            <FormHelperText>
              <div aling = "center">
                Guest Control of playback state
              </div>
            </FormHelperText>
            <RadioGroup row defaultValue="true">
              <FormLabelControl 
              value="true" 
              control={<Radio color= "primary"/>}
              label = "Play/Pause"
              labelPlacement="bottom"
              />
              <FormLabelControl 
              value="true" 
              control={<Radio color= "secudary"/>}
              label = "No control"
              labelPlacement="bottom"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
      </Grid>
    );
  }
}