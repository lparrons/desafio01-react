import React, { Component, Fragment } from "react";
import "./style.scss";
//PostHeader
export default class PostHeader extends Component {
  state = {
    avatar1: "sem imagem",
    nome1: "Diego Schell Fernandes",
    tempo1: "há 3 min",
    texto1:
      "Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum. Aliquam eget odio sed ligula iaculis consequat at eget orci. Mauris molestie sit amet metus mattis varius. Donec sit amet ligula eget nisi sodales egestas. Aliquam interdum dolor aliquet dolor sollicitudin fermentum. Donec congue lorem a molestie bibendum. Etiam nisi ante, consectetur eget placerat a, tempus a neque. Donec ut elit urna. Etiam venenatis eleifend urna eget scelerisque. Aliquam in nunc quis dui sollicitudin ornare ac vitae lectus.",

    avatar2: "sem imagem",
    nome2: "Rubia Salvolksi",
    tempo2: "há 10 min",
    texto2:
      "Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum.",

    avatar3: "sem imagem",
    nome3: "Mr. Mustache",
    tempo3: "há 20 min",
    texto3:
      "Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero posuere vulputate. Etiam elit elit, elementum sed varius at, adipiscing vitae est. Sed nec felis pellentesque, lacinia dui sed, ultricies sapien. Pellentesque orci lectus, consectetur vel posuere posuere, rutrum eu ipsum. Aliquam eget odio sed ligula iaculis consequat at eget orci. Mauris molestie sit amet metus mattis varius. Donec sit amet ligula eget nisi sodales egestas. Aliquam interdum dolor aliquet dolor sollicitudin fermentum."
  };

  render() {
    return (
      <Fragment>
        {this.state.avatar1} <br />
        {this.state.nome1} <br />
        {this.state.tempo1} <br />
        {this.state.texto1} <br />
        <br />
        {this.state.avatar2} <br />
        {this.state.nome2} <br />
        {this.state.tempo2} <br />
        {this.state.texto2} <br />
        <br />
        {this.state.avatar3} <br />
        {this.state.nome3} <br />
        {this.state.tempo3} <br />
        {this.state.texto3} <br />
      </Fragment>
    );
  }
}
