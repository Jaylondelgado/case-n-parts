import React from "react";
import { Grid, Cell } from "styled-css-grid";

function ViewBuilds() {
  return (
    <Grid columns={"50px 50px 50px"} justifyContent="space-evenly">
      <Cell>
        <img src={"src/static/black-large.jpg"} />
      </Cell>
      <Cell>B</Cell>
      <Cell>C</Cell>
    </Grid>
  );
}
export default ViewBuilds;
