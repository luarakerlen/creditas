<h1 align="center">Flexbox</h1>
<p align="center">Utilização, propriedades e valores</p>

## Conteúdo
<!--ts-->
   * [Conceito](#conceito)
   * [Inicialização](#inicialização)
   * [Propriedades](#propriedades)
      * [Flex Direction](#flex-direction)
      * [Justify Content](#justify-content)
      * [Align Items](#align-items)
      * [Align Self](#align-self)
   * [Autora](#autora)
<!--te-->


## Conceito
O Flexbox é um conceito do CSS3 que visa organizar os elementos de uma página HTML dentro de seus containers de forma dinâmica. Ou seja, independente das suas dimensões eles sempre manterão um layout flexível dentro do seu elemento pai, reorganizando-se e acordo com a necessidade.

<div align="center">
  <b>As imagens a seguir mostram um container, que é o elemento pai, com vários itens dentro dele.</b>
  <p>
    <img style="border-radius: 5px" height="200" src="./src/01-container.svg" alt="Container">
  </p>
  <p>
    <img style="border-radius: 5px" height="200" src="./src/02-items.svg" alt="Itens">
  </p>
</div>

## Inicialização
Para utilizar as propriedades do flexbox nos elementos, basta acrescentar a seguinte propriedade na customização do **elemento pai**:
```
.classeDoElementoPai {
  display: flex;
}
```

## Propriedades
#### Flex Direction
Define a direção em que os itens serão organizados.
- Valores possíveis:
    - row (default)
    - row-reverse
    - column
    - column-reverse

<div align="center">
  <b>Imagem ilustrativa de flex-direction</b>
  <p>
    <img style="border-radius: 5px" height="300" src="./src/flex-direction.svg" alt="Imagem ilustrativa de Flex Direction">
  </p>
</div>

Exemplo:
```
.classeDoElementoPai {
  display: flex;
  flex-direction: column;
}
```

#### Justify Content
Define a disposição dos itens ao longo do espaço disponível - horizontalmente (para row e row-reverse) ou verticalmente (para column e column-reverse).
- Valores possíveis:
    - flex-start (default)
    - flex-end
    - center
    - space-between
    - space-around
    - space-evenly

<div align="center">
  <b>Imagem ilustrativa de justify-content</b>
  <p>
    <img style="border-radius: 5px" height="500" src="./src/justify-content.svg" alt="Imagem ilustrativa de Justify Content">
  </p>
</div>

Exemplo:
```
.classeDoElementoPai {
  display: flex;
  justify-content: space-around;
}
```

#### Align Items
Alinha itens no eixo inverso - verticalmente (para row e row-reverse) ou horizontalmente (para column e column-reverse)
- Valores possíveis:
    - stretch (default)
    - flex-start
    - flex-end
    - center
    - baseline

<div align="center">
  <b>Imagem ilustrativa de align-items</b>
  <p>
    <img style="border-radius: 5px" height="500" src="./src/align-items.svg" alt="Imagem ilustrativa de Align Items">
  </p>
</div>

Exemplo
```
.classeDoElementoPai {
  display: flex;
  align-items: center;
}
```

#### Align Self
Alinha apenas um dos itens individualmente, sobrescrevendo o align-items para aquele item específico - verticalmente (para row e row-reverse) ou horizontalmente (para column e column-reverse)
- Valores possíveis (os mesmos de align-items):
    - stretch (default)
    - flex-start
    - flex-end
    - center

<div align="center">
  <b>Imagem ilustrativa de align-self</b>
  <p>
    <img style="border-radius: 5px" height="300" src="./src/align-self.svg" alt="Imagem ilustrativa de Align Self">
  </p>
</div>

Para utilizar o align-self, é necessário acrescentar a seguinte propriedade na customização do elemento em questão, como os dois exemplos a seguir:
```
.target.classeDoElementoEspecifico { align-self: flex-end; }
```

```
.target:nth-of-type(numeroDoItem) { align-self: center; }
```

### Autora
---

<a href="https://www.linkedin.com/in/luarakerlen/">
 <img title="Luara Kerlen" style="border-radius: 50%;" src="https://media-exp1.licdn.com/dms/image/C4E03AQGS1uYwIh8sPQ/profile-displayphoto-shrink_200_200/0/1517236388384?e=1613606400&v=beta&t=CDWXZHUBDwCQJ_2S8l5hfBRs_pbXtXQmacwsFLBcqpg" width="100px;" alt="Foto da Luara"/>
 <br />
 <sub><b>Luara Kerlen</b></sub></a> <a href="https://www.linkedin.com/in/luarakerlen/" title="Luara Kerlen"></a>


Feito com ❤️ por Luara Kerlen
<br>Entre em contato!

[![Twitter Badge](https://img.shields.io/twitter/url?label=%40luarakerlen&style=social&url=https%3A%2F%2Ftwitter.com%2Fluarakerlen)](https://twitter.com/luarakerlen)
[![Linkedin Badge](https://img.shields.io/badge/-Luara%20Kerlen-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/luarakerlen/)](https://www.linkedin.com/in/luarakerlen/) 
[![Gmail Badge](https://img.shields.io/badge/-luarakerlen12@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:luarakerlen12@gmail.com)](mailto:luarakerlen12@gmail.com)
