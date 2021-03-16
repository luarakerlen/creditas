<h1 align="center">CSS Grid</h1>
<p align="center">Utilização, propriedades e valores</p>

## Conteúdo
<!--ts-->
   * [Conceito](#conceito)
   * [Inicialização](#inicialização)
   * [Propriedades do pai](#propriedades-do-pai)
      * [Grid Template Rows | Grid Template Columns](#grid-template-rows-e-grid-template-columns)
      * [Grid Template Areas](#grid-template-areas)
      * [Row Gap | Column Gap](#row-gap-e-column-gap)
   * [Propriedades dos filhos](#propriedades-dos-filhos)
      * [Grid Row Start | Grid Row End](#grid-row-start-e-grid-row-end)
      * [Grid Column Start | Grid Column End](#grid-column-start-e-grid-column-end)
      * [Row Gap | Column Gap](#row-gap-e-column-gap)
      * [Order](#order)
   * [CSS Grid Shorthands](#css-grid-shorthands)
      * [Grid Template](#grid-template)
      * [Grid](#grid)
      * [Gap](#gap)
      * [Grid Row | Grid Column](#grid-row-e-grid-column)
      * [Grid Area](#grid-area)
   * [CSS Grid x Flexbox](#css-grid-x-flexbox)
   * [Autora](#autora)
<!--te-->

## Conceito
CSS Grid Layout é o sistema de layout mais poderoso disponível em CSS.
Trabalha-se com o Grid Layout aplicando regras CSS tanto a um elemento pai (que se torna o Grid Container) quanto aos filhos desse elemento (que se tornam Grid Items).

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
Para utilizar as propriedades do CSS Grids, é necessário acrescentar a propriedade _display_ na customização do **elemento pai**, com um dos dois valores disponíveis.
- Valores possíveis:
    - grid -> gera grid em block-level*
    - inline-grid -> gera grid em inline-level*
    
*<a href="https://www.youtube.com/watch?v=hgoFi0fCv3w&ab_channel=CemEygiMedia" target="_blank">Entenda a diferença entre display block, inline e inline-block</a>
    
Exemplo:
```
.classeDoElementoPai { display: grid; }
```

## Propriedades do pai
<span id="grid-template-rows-e-grid-template-columns" />

### Grid Template Rows | Grid Template Columns
Definem as colunas e linhas da grade com uma lista de valores separados por espaço.
Os valores representam o tamanho da trilha e o espaço entre eles representa a linha da grid.

- Valores:
    - track-size –> pode ser um comprimento, uma porcentagem ou uma fração do espaço livre na grade
    - line-name –> nome arbitrário das linhas

Exemplos:

1. Quando se deixa um espaço vazio entre os valores da faixa <track-size>, as linhas de grade recebem, como nome <line-name>, números positivos e negativos automaticamente:

```
.classeDoElementoPai {
  display: grid;
  grid-template-rows: 25% 100px auto;
  grid-template-columns: 40px 50px auto 50px 40px;
}
```

<div align="center">
  <b>Imagem ilustrativa do exemplo 1</b>
  <p>
    <img style="border-radius: 5px" height="400" src="./src/template-columns-rows-01.svg" alt="Imagem ilustrativa do exemplo 1">
  </p>
</div>

2. Pode-se escolher nomear explicitamente as linhas da seguinte maneira:

```
.classeDoElementoPai {
  grid-template-rows: [row1-start] 25% [row1-end] 100px [third-line] auto [last-line];
  grid-template-columns: [first] 40px [line2] 50px [line3] auto [col4-start] 50px [five] 40px [end];
}
```

<div align="center">
  <b>Imagem ilustrativa do exemplo 2</b>
  <p>
    <img style="border-radius: 5px" height="400" src="./src/template-column-rows-02.svg" alt="Imagem ilustrativa do exemplo 2">
  </p>
</div>

3. Se a definição contém partes repetidas, pode-se usar a seguinte notação para simplificar as coisas:

```
.classeDoElementoPai { grid-template-columns: repeat(3, 20px [col-start]); }
```
O que é equivalente a:
```
.classeDoElementoPai { grid-template-columns: 20px [col-start] 20px [col-start] 20px [col-start]; }
```

4. É possível utilizar a unidade _fr_.
A unidade _fr_ permite que definir o tamanho de uma trilha como uma fração do espaço livre do container pai.
Por exemplo, se dois elementos forem definidos como 1fr e 3fr respectivamente, o espaço será dividido em 4 partes iguais:
o primeiro elemento ocupará 1/4 e o segundo elemento, 3/4 do espaço restante.

O código a seguir definirá cada item com um terço da largura do container da grid:
```
.classeDoElementoPai { grid-template-columns: 1fr 1fr 1fr; }
```

No código a seguir, o primeiro item ocupará um quarto e o segundo ocupará três quartos do container pai:
```
.classeDoElementoPai { grid-template-rows: 1fr 3fr; }
```

Porém, o espaço livre é calculado **após** quaisquer itens não flexíveis.
No exemplo a seguir, a quantidade total de espaço livre disponível para os itens com unidade _fr_ não inclui o 50px, então o primeiro, terceiro e quarto itens ocuparão, cada um, um terço do espaço restante após o item de 50px ter tomado seu próprio espaço:
```
.classeDoElementoPai { grid-template-rows: 1fr 50px 1fr 1fr; }
```

---
### Grid Template Areas
Define um modelo de grade fazendo referência aos nomes das áreas de grade que são especificadas com a propriedade grid-area.
Repetir o nome de uma área de grade faz com que o conteúdo se espalhe por essas células.
Um ponto (.) significa uma célula vazia. A própria sintaxe fornece uma visualização da estrutura da grid.

- Valores:
    - grid-area-name –> o nome de uma área de grade especificada com grid-area
    - . –> um ponto significa uma célula de grade vazia
    - none –> nenhuma área de grade é definida

Exemplo:

1. O exemplo abaixo criará uma grade com 4 colunas de largura por 3 linhas de altura.
Toda a linha superior será composta pela área do cabeçalho.
A linha do meio será composta de duas áreas principais, uma célula vazia e uma área da barra lateral.
A última linha é toda de rodapé.

```
.item-a {
  grid-area: header;
}
.item-b {
  grid-area: main;
}
.item-c {
  grid-area: sidebar;
}
.item-d {
  grid-area: footer;
}

.container {
  display: grid;
  grid-template-columns: 50px 50px 50px 50px;
  grid-template-rows: auto;
  grid-template-areas: 
    "header header header header"
    "main main . sidebar"
    "footer footer footer footer";
}
```

<div align="center">
  <b>Imagem ilustrativa do exemplo 1</b>
  <p>
    <img style="border-radius: 5px" height="400" src="./src/dddgrid-template-areas.svg" alt="Imagem ilustrativa do exemplo 1">
  </p>
</div>

Cada linha em sua declaração precisa ter o mesmo número de células.
Pode-se usar qualquer número de pontos adjacentes para declarar uma única célula vazia. Desde que os pontos não tenham espaços entre eles, eles representam uma única célula.
Observe que não se está nomeando linhas com esta sintaxe, apenas áreas.
Quando se usa esta sintaxe, as linhas nas extremidades das áreas são, na verdade, nomeadas automaticamente. Se o nome da área da grid for _foo_, o nome da primeira linha da linha e da primeira linha da coluna da área será _foo-start_, e o nome da última linha da linha e da última linha da coluna será _foo-end_. Isso significa que algumas linhas podem ter vários nomes, como a linha da extrema esquerda no exemplo acima, que terá três nomes: _header-start_, _main-start_ e _footer-start_.
 
---
<span id="row-gap-e-column-gap" />

### Row Gap | Column Gap
Especifica o tamanho do espaço entre as linhas/colunas.
Os espaços são criados apenas **entre** as linhas/colunas, não nas bordas externas.

- Valor:
    - line-size –> um valor de comprimento

Exemplo:

```
.classeDoElementoPai {
  display: grid;
  grid-template-columns: 100px 50px 100px;
  grid-template-rows: 80px auto 80px; 
  column-gap: 10px;
  row-gap: 15px;
}
```

<div align="center">
  <b>Imagem ilustrativa do exemplo 1</b>
  <p>
    <img style="border-radius: 5px" height="400" src="./src/dddgrid-gap.svg" alt="Imagem ilustrativa do exemplo 1">
  </p>
</div>

Obs: O prefixo _grid-_ será removido e _grid-column-gap_ e _grid-row-gap_ seão renomeados para _column-gap_ e _row-gap_. As propriedades não corrigidas já são suportadas no Chrome 68+, Safari 11.2 Release 50+ e Opera 54+.

## Propriedades dos filhos
<span id="grid-row-start-e-grid-row-end" />
<span id="grid-column-start-e-grid-column-end" />

### Grid Row Start | Grid Row End
### Grid Column Start | Grid Column End
Determina a localização de um item de grade dentro da grade referindo-se a linhas de grade específicas.
_grid-row-start_ / _grid-column-start_ é a linha onde o item começa e _grid-row-end_ / _grid-column-end_ é a linha onde o item termina.
Se nenhum _grid-row-end_ / _grid-column-end_ for declarado, o item ocupará 1 trilha por padrão.
Os itens podem se sobrepor. Pode-se usar z-indexpara controlar a ordem de empilhamento.

- Valores:
    - line –> pode ser um número para se referir a uma linha de grade numerada ou um nome para se referir a uma linha de grade nomeada
    - span number -> o item irá abranger o número fornecido de faixas de grade
    - span name -> o item se estenderá até atingir a próxima linha com o nome fornecido
    - auto -> indica a colocação automática, um intervalo automático ou um intervalo padrão de um

Exemplos:

Exemplo 1:
```
.item-a {
  grid-column-start: 2;
  grid-column-end: five;
  grid-row-start: row1-start;
  grid-row-end: 3;
}
```

<div align="center">
  <b>Imagem ilustrativa do exemplo 1</b>
  <p>
    <img style="border-radius: 5px" height="400" src="./src/grid-column-row-start-end-01.svg" alt="Imagem ilustrativa do exemplo 1">
  </p>
</div>

Exemplo 2:
```
.item-b {
  grid-column-start: 1;
  grid-column-end: span col4-start;
  grid-row-start: 2;
  grid-row-end: span 2;
}
```

<div align="center">
  <b>Imagem ilustrativa do exemplo 2</b>
  <p>
    <img style="border-radius: 5px" height="400" src="./src/grid-column-row-start-end-02.svg" alt="Imagem ilustrativa do exemplo 2">
  </p>
</div>

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

## CSS Grid Shorthands

### Grid Template
É a abreviação para as propriedades _grid-template-rows_, _grid-template-columns_ e _grid-template-areas_, nessa ordem, separados por "/" (barra).

Os dois códigos a seguir são equivalentes, mas o primeiro usa shorthand _grid-template_:
```
.classeDoElementoPai { grid-template: 50% 1fr 3fr / 1fr 20% 2fr 50px }
```

```
.classeDoElementoPai {
  grid-template-rows: 50% 1fr 3fr;
  grid-template-columns: 1fr 20% 2fr 50px;
}
```

---
### Grid
É a abreviação para as propriedades _grid-template-rows_, _grid-template-columns_, _grid-template-areas_, _grid-auto-rows_, _grid-auto-columns_, e _grid-auto-flow_, nessa ordem, separados por "/" (barra).

Os dois códigos a seguir são equivalentes, mas o primeiro usa shorthand _grid_:
```
.classeDoElementoPai { grid: 100px 300px / 3fr 1fr; }
```

```
.classeDoElementoPai {
  grid-template-rows: 100px 300px;
  grid-template-columns: 3fr 1fr;
}
```

Os dois códigos a seguir são equivalentes, mas o primeiro usa shorthand _grid_:
```
.classeDoElementoPai { grid: auto-flow dense 100px / 1fr 2fr; }
```

```
.classeDoElementoPai {
  grid-auto-flow: row dense;
  grid-auto-rows: 100px;
  grid-template-columns: 1fr 2fr;
}
```

Essa abreviação também aceita uma sintaxe mais complexa, mas bastante prática, para configurar tudo de uma vez.
Especifica-se as propriedades _grid-template-areas_, _grid-template-rows_ e _grid-template-columns_, e todas as outras subpropriedades são definidas com seus valores iniciais.
O que está sendo feito é especificar os nomes das linhas e os tamanhos das trilhas em linha com suas respectivas áreas de grade.
Isso é mais fácil de descrever com um exemplo.

Novamente, os dois códigos a seguir são equivalentes, mas o primeiro usa shorthand _grid_:
```
.classeDoElementoPai {
  grid: [row1-start] "header header header" 1fr [row1-end]
        [row2-start] "footer footer footer" 25px [row2-end]
        / auto 50px auto;
}
```

```
.classeDoElementoPai {
  grid-template-areas: 
    "header header header"
    "footer footer footer";
  grid-template-rows: [row1-start] 1fr [row1-end row2-start] 25px [row2-end];
  grid-template-columns: auto 50px auto;
}
```
---
<span id="grid-row-e-grid-column" />

### Gap
É a abreviação para as propriedades _row-gap_ e _column-gap_, nessa ordem. Caso seja especificado apenas 1 valor, tanto _row-gap_ quanto _column-gap_ receberão o mesmo valor.

Os dois códigos a seguir são equivalentes, mas o primeiro usa shorthand _gap_:
```
.classeDoElementoPai {
  grid-template-columns: 100px 50px 100px;
  grid-template-rows: 80px auto 80px; 
  gap: 15px 10px;
}
```

```
.classeDoElementoPai {
  grid-template-columns: 100px 50px 100px;
  grid-template-rows: 80px auto 80px; 
  row-gap: 15px;
  column-gap: 10px;
}
```

### Grid Row | Grid Column
Grid Row é a abreviação para as propriedades _grid-row-start_ e _grid-row-end_, nessa ordem, separados por "/" (barra).
Grid Column é a abreviação para as propriedades _grid-column-start_ e _grid-column-end_, nessa ordem, separados por "/" (barra).

Os dois códigos a seguir são equivalentes, mas o primeiro usa shorthands _grid-row_ e _grid-column_:
```
.classeDoElementoFilho {
  grid-row: 1 / 5 ;
  grid-column: 2 / 4;
}
```

```
.classeDoElementoFilho {
  grid-row-start: 1;
  grid-row-end: 5;
  grid-column-start: 2;
  grid-column-end: 4;
}
```

Os dois códigos a seguir são equivalentes, mas o primeiro usa shorthands _grid-row_ e _grid-column_:
```
.classeDoElementoFilho {
  grid-row: 2 / span 3 ;
  grid-column: 1 / span 5;
}
```

```
.classeDoElementoFilho {
  grid-row-start: 2;
  grid-row-end: span 3;
  grid-column-start: 1;
  grid-column-end: span 5;
}
```

---
### Grid Area
É a abreviação para as propriedades _grid-row-start_, _grid-column-start_, _grid-row-end_ e _grid-row-end_, nessa ordem, separados por "/" (barra).

Os três códigos a seguir são equivalentes, mas o primeiro usa shorthand _grid-area_:
```
.classeDoElementoFilho { grid-area: 1 / 2 / 4 / 6; }
```

```
.classeDoElementoFilho {
  grid-row: 1 / 4 ;
  grid-column: 2 / 6;
}
```

```
.classeDoElementoFilho {
  grid-row-start: 1;
  grid-row-end: 4;
  grid-column-start: 2;
  grid-column-end: 6;
}
```

## CSS Grid x Flexbox
O CSS Grid é um sistema bidimensional, o que significa que pode lidar com colunas **e** linhas, ao contrário do flexbox que é basicamente um sistema unidimensional.

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
