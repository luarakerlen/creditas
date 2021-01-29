<h1 align="center">Flexbox</h1>
<p align="center">Utilização, propriedades e valores</p>

## Conteúdo
<!--ts-->
   * [Conceito](#conceito)
   * [Inicialização](#inicialização)
   * [Propriedades do pai](#propriedades-do-pai)
      * [Flex Direction](#flex-direction)
      * [Justify Content](#justify-content)
      * [Flex Wrap](#flex-wrap)
      * [Align Items](#align-items)
   * [Propriedades dos filhos](#propriedades-dos-filhos)
      * [Align Self](#align-self)
      * [Flex Grow](#flex-grow)
      * [Flex Shrink](#flex-shrink)
      * [Flex Basis](#flex-basis)
      * [Order](#order)
   * [Flex Shorthand](#flex-shorthand)
      * [Flex Flow](#flex-flow)
      * [Flex](#flex)
   * [Flexbox x CSS Grid](#flexbox-x-css-grid)
   * [Autora](#autora)
<!--te-->

## Conceito
O Flexbox é um conceito do CSS3 que visa organizar os elementos de uma página HTML dentro de seus containers de forma dinâmica. Ou seja, independente das suas dimensões eles sempre manterão um layout flexível dentro do seu elemento pai, reorganizando-se e acordo com a necessidade.

<div align="center">
  <b>As imagens a seguir mostram um container, que é o elemento pai, com vários itens (filhos) dentro dele</b>
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
.classeDoElementoPai { display: flex; }
```

## Propriedades do pai

### Flex Direction
Define a direção em que os itens serão organizados.
- Valores possíveis:
    - row (default)
    - row-reverse
    - column
    - column-reverse

<div align="center">
  <b>Imagem ilustrativa de flex-direction</b>
  <p>
    <img style="border-radius: 5px" height="200" src="./src/flex-direction.svg" alt="Imagem ilustrativa de Flex Direction">
  </p>
</div>

Exemplo:
```
.classeDoElementoPai {
  display: flex;
  flex-direction: column;
}
```

---
### Justify Content
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

---
### Flex Wrap
Por padrão, os itens tentarão todos se ajustar em uma linha.
É possível alterar isso e permitir que os itens sejam "quebrados em mais linhas" conforme necessário com esta propriedade.
- Valores possíveis:
    - nowrap (default)
    - wrap: os itens flexíveis serão quebrados em várias linhas, de cima para baixo.
    - wrap-reverse: os itens flexíveis serão quebrados em várias linhas, de baixo para cima. **O wrap-reverse dá a impressão de inversão do align-items**

<div align="center">
  <b>Imagem ilustrativa de flex-wrap</b>
  <p>
    <img style="border-radius: 5px" height="200" src="./src/flex-wrap.svg" alt="Imagem ilustrativa de Flex Wrap">
  </p>
  
  <b>Imagem ilustrativa com os diferentes valores de flex-wrap</b>
  <p>
    <img style="border-radius: 5px" height="300" src="./src/flex-wrap.jpg" alt="Imagem ilustrativa com os diferentes valores de Flex Wrap">
  </p>
</div>

Exemplo:
```
.classeDoElementoPai {
  display: flex;
  flex-wrap: wrap;
}
```

---
### Align Content
Alinha as **linhas** do elemento pai quando há espaço extra no eixo cruzado, semelhante a como _justify-content_ alinha itens individuais no eixo principal.
Esta propriedade só tem efeito quando o elemento pai for multilinha, onde _flex-wrap_ for definido como _wrap_ ou _wrap-reverse_.
Um elemento pai de linha única (ou seja, onde _flex-wrap_ é definido com seu valor padrão _nowrap_) não refletirá efeito com o align-content.
- Valores possíveis:
    - stretch (default)
    - flex-start
    - flex-end
    - center
    - space-between
    - space-around
    - space-evenly

<div align="center">
  <b>Imagem ilustrativa de align-content</b>
  <p>
    <img style="border-radius: 5px" height="500" src="./src/align-content.svg" alt="Imagem ilustrativa de Align Content">
  </p>
</div>

Exemplo:
```
.classeDoElementoPai {
  display: flex;
  align-content: space-between;
}
```

---
### Align Items
Alinha os **itens** no eixo inverso - verticalmente (para row e row-reverse) ou horizontalmente (para column e column-reverse)
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

Exemplo:
```
.classeDoElementoPai {
  display: flex;
  align-items: center;
}
```

## Propriedades dos filhos

### Align Self
Alinha apenas um dos itens individualmente, sobrescrevendo o align-items para aquele item específico - verticalmente (para row e row-reverse) ou horizontalmente (para column e column-reverse)
- Valores possíveis (os mesmos de align-items):
    - stretch (default)
    - flex-start
    - flex-end
    - center

<div align="center">
  <b>Imagem ilustrativa de align-self</b>
  <p>
    <img style="border-radius: 5px" height="200" src="./src/align-self.svg" alt="Imagem ilustrativa de Align Self">
  </p>
</div>

Para utilizar o align-self, é necessário acrescentar a seguinte propriedade na customização do elemento em questão, como os dois exemplos a seguir:
```
.classeDoElementoEspecifico { align-self: flex-end; }
```

```
.classeDoElementoPai:nth-of-type(numeroDoItem) { align-self: center; }
```

---
### Flex Grow
Define a capacidade de "crescimento" de um item flexível, quando há espaço "sobrando".
Aceita um valor sem unidade que serve de proporção.
Ele determina a quantidade de espaço disponível dentro do flex container que o item deve ocupar.
Se todos os itens tiverem o flex-grow definidos como 1, o espaço restante no contêiner será distribuído igualmente para todos os itens.
Se um dos itens tiver o valor 2, por exemplo, esse item ocupará o dobro do espaço restante em relação aos outros com valor igual a 1 (ou tentará, pelo menos).
- Valor default: 0

<div align="center">
  <b>Imagem ilustrativa de flex-grow</b>
  <p>
    <img style="border-radius: 5px" height="200" src="./src/flex-grow.svg" alt="Imagem ilustrativa de Flex Grow">
  </p>
</div>

Exemplo:
```
.classeDoElementoEspecifico { flex-grow: 2; }
```

---
### Flex Shrink
Define a capacidade de "encolhimento" de um item flexível, quando não há espaço suficiente.
Aceita um valor sem unidade que serve de proporção.
Se todos os itens tiverem o flex-shrink definidos como 1, todos os itens diminuirão na mesma proporção.
Se um dos itens tiver o valor 2, por exemplo, esse item encolherá duas vezes mais rápido em relação aos outros com valor igual a 1.
Se um item tiver o valor 0, ele não se encolherá.
Caso o elemento pai esteja configurado com _flex-wrap=wrap ou wrap-reverse_, o "encolhimento é feito apenas DEPOIS das quebras de linha.

**Os itens PODEM possuir _flex-grow_ e _flex-shrink_ ao mesmo tempo**
- Valor default: 1

<div align="center">
  <b>Imagem ilustrativa com todos os itens com flex-shrink=1, exceto pelo terceiro item</b>
  <p>
    <img style="border-radius: 5px" height="200" src="./src/flex-shrink.gif" alt="Imagem ilustrativa com todos os itens com flex-shrink=1, exceto pelo terceiro item">
  </p>
  
  <b>Imagem ilustrativa com todos os itens com flex-shrink=1, exceto pelo segundo item</b>
  <p>
    <img style="border-radius: 5px" height="200" src="./src/flex-shrink.jpeg" alt="Imagem ilustrativa com todos os itens com flex-shrink=1, exceto pelo segundo item">
  </p>
</div>

Exemplo:
```
.classeDoElementoEspecifico { flex-shrink: 2; }
```

---
### Flex Basis
Define o tamanho **inicial** ideal de um elemento, caso seja possível.
Pode ser um valor para o comprimento (por exemplo, 20%, 5rem, etc.) ou uma palavra-chave.
O valor do flex-basis é o tamanho inicial "ideal" para aquele item, mas se o espaço não permitir, o item receberá apenas o tamanho possível.
A palavra-chave _auto_ significa “olhe para a minha propriedade de largura ou altura”.

**Os itens PODEM possuir _flex-basis_, _flex-grow_ e _flex-shrink_ ao mesmo tempo**
- Valor default: auto

**Contudo, o _flex-basis_ sempre respeita os valores de _min-width_, _min-height, _max-width_ e _max-height_.
Portanto, para itens organizados em linha:**
  - **Se o valor do _flex-basis_ for menor do que o valor do _min-width_, o valor respeitado será o do _min-width_.**
  - **Se o valor do _flex-basis_ for maior do que o valor do _max-width_, o valor respeitado será o do _max-width_.**
  
**E para itens organizados em coluna:**
  - **Se o valor do _flex-basis_ for menor do que o valor do _min-height_, o valor respeitado será o do _min-height_.**
  - **Se o valor do _flex-basis_ for maior do que o valor do _max-height_, o valor respeitado será o do _max-height_.**
  
<div align="center">
  <b>Imagem ilustrativa de flex-basis</b>
  <p>
    <img style="border-radius: 5px" height="500" src="./src/flex-basis.jpg" alt="Imagem ilustrativa de Flex Basis">
  </p>
</div>

Exemplos:
```
.classeDoElementoEspecifico { flex-basis: 300px; }
```

```
.classeDoElementoEspecifico { flex-basis: 50%; }
```

---
### Order
Por padrão, os itens são dispostos na ordem de origem. No entanto, a propriedade _order_ pode alterar a ordem em que eles aparecem no elemento pai.
A ordem não necessariamente segue a sequência [1, 2, 3, ...] Quanto maior o valor da propriedade _order_, mais atrás o item será posicionado, e vice-versa. Essa propriedade pode receber valores negativos.
Se existirem três elementos e dois receberem _order=1_, por exemplo, esses dois elementos irão para o final do container pai e o elemento que não recebeu nada ficará no início.
- Valor default: 0

<div align="center">
  <b>Imagem ilustrativa de order</b>
  <p>
    <img style="border-radius: 5px" height="400" src="./src/order.svg" alt="Imagem ilustrativa de Order">
  </p>
</div>

Exemplo:
```
.classeDoElementoEspecifico { order: 1; }
```

## Flex Shorthand

### Flex Flow
É a abreviação para as propriedades _flex-direction_ e _flex-wrap_, nessa ordem.
- Valor default: row nowrap

Exemplo:
```
.classeDoElementoPai { flex-flow: column wrap; }
```

---
### Flex
É a abreviação para as propriedades _flex-grow_, _flex-shrink_ e _flex-basis_ combinados, nessa ordem.
O segundo e o terceiro parâmetros (_flex-shrink_ e _flex-basis_) são opcionais, mas o elemento terá os valores default automaticamente para essas propriedades. 
- Valor default: 0 1 0px
- Outros valores:
  - flex: auto - equilave à _1 1 auto_
  - flex: none - equivale à _0 0 auto_

Exemplos:
```
.classeDoElementoEspecifico { flex: 2 0 30%; }
```

```
.classeDoElementoEspecifico { flex: 1 2; }
```

```
.classeDoElementoEspecifico { flex: 1 300px; }
```

```
.classeDoElementoEspecifico { flex: 1; }
```

```
.classeDoElementoEspecifico { flex: auto; }
```

## Flexbox x CSS Grid
O Flexbox é um sistema unidimensional, o que significa que pode lidar com colunas **ou** linhas, ao contrário do CSS Grid que é um sistema bidimensional.

<div align="center">
  <b>Comparação entre Flexbox e CSS Grid</b>
  <p>
    <img style="border-radius: 5px" height="400" src="./src/flex-css.jpg" alt="Imagem de comparação entre Flexbox e CSS Grid">
  </p>
</div>

Ambos ajudam demais no alinhamento (horizontal e vertical) e no desenvolvimento de grids dentro de aplicações modernas.
Geralmente, usa-se o CSS Grid para montar a estrutura de layout da página e o flexbox para construir os "componentes" dentro desses blocos de layout do grid.

Podemos fazer a seguinte comparação:

<div align="center">
  <b>Comparação entre Flexbox e CSS Grid</b>
  <p>
    <img style="border-radius: 5px" height="400" src="./src/casa.jfif" alt="Imagem de comparação entre Flexbox e CSS Grid utilizando uma casa">
  </p>
</div>

Ou seja, se imaginarmos uma casa, o **CSS Grid** seria responsável pela **estrutura dos cômodos** e o **flexbox** seria responsável pela **disposição dos móveis dentro desses cômodos**.
Isso porque o Flexbox é unidimensional, ou seja, linha **OU** coluna, então é perfeito para o desenvolvimento interno de COMPONENTES.
Já CSS Grid é multidimensional (ou bidimensional), ou seja, linhas **E** colunas, perfeito pra LAYOUTS.

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
