import React, { useState } from "react";

function Botao(props) {
  console.log(props);
  return <button onClick={props.onClick}>Teste</button>;
}

export default Botao;
