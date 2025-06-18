# Panel Layered

![Static Badge](https://img.shields.io/badge/Version-Beta-yellow)
![Static Badge](https://img.shields.io/badge/Status-Testing-yellow)

## Description

The `[ui=vanilla].panel-layered` element is a container for overlapping layers.

## Overview

<div style="height:20em;width:100%;">
  <link rel="stylesheet" href="../vanilla-ui/panel-layered.css">
  <script src="../vanilla-ui/panel-layered.js"></script>
  <style>
    body {
      font-family: "Arial", sans-serif;
    }
    .flex-column {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      gap: 0.5em;
      margin: 0;
      padding: 0;
    }
    .flex-row {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;
      gap: 0.5em;
      margin: 0;
      padding: 0;
    }
  </style>
  <div ui="vanilla" class="panel-layered" style="height:20em;">
    <div class="flex-column" no-hide="up" style="background-color:tomato;">
      <h1>1<sup>st</sup> panel</h1>
      <label>This panel hides up</label>
      <div class="flex-row">
        <button onclick="clickNextPanel(this)">Next panel</button>
      </div>
    </div>
    <div class="flex-column" hide="down"  style="background-color:orange;">
      <h1>2<sup>nd</sup> panel</h1>
      <label>This panel hides down</label>
      <div class="flex-row">
        <button onclick="clickPrevPanel(this)">Prev panel</button>
        <button onclick="clickNextPanel(this)">Next panel</button>
      </div>
    </div>
    <div class="flex-column" hide="left"  style="background-color:mediumseagreen;">
      <h1>3<sup>rd</sup> panel</h1>
      <label>This panel hides left</label>
      <div class="flex-row">
        <button onclick="clickPrevPanel(this)">Prev panel</button>
        <button onclick="clickNextPanel(this)">Next panel</button>
      </div>
    </div>
    <div class="flex-column" hide="right"  style="background-color:lightblue;">
      <h1>4<sup>th</sup> panel</h1>
      <label>This panel hides right</label>
      <div class="flex-row">
        <button onclick="clickPrevPanel(this)">Prev panel</button>
        <button onclick="clickNextPanel(this)">Next panel</button>
      </div>
    </div>
    <div class="flex-column" hide="transparent"  style="background-color:dodgerblue;">
      <h1>5<sup>th</sup> panel</h1>
      <label>This panel hides transparent</label>
      <div class="flex-row">
        <button onclick="clickPrevPanel(this)">Prev panel</button>
        <button onclick="clickNextPanel(this)">Next panel</button>
      </div>
    </div>
    <div class="flex-column" hide="fly"  style="background-color:magenta;">
      <h1>6<sup>th</sup> panel</h1>
      <label>This panel hides fly</label>
      <div class="flex-row">
        <button onclick="clickPrevPanel(this)">Prev panel</button>
        <button onclick="clickNextPanel(this)">Next panel</button>
      </div>
    </div>
    <div class="flex-column" hide="rotate-top-left"  style="background-color:tomato;">
      <h1>7<sup>th</sup> panel</h1>
      <label>This panel hides rotate-top-left</label>
      <div class="flex-row">
        <button onclick="clickPrevPanel(this)">Prev panel</button>
        <button onclick="clickNextPanel(this)">Next panel</button>
      </div>
    </div>
    <div class="flex-column" hide="rotate-top-right"  style="background-color:orange;">
      <h1>8<sup>th</sup> panel</h1>
      <label>This panel hides rotate-top-right</label>
      <div class="flex-row">
        <button onclick="clickPrevPanel(this)">Prev panel</button>
        <button onclick="clickNextPanel(this)">Next panel</button>
      </div>
    </div>
    <div class="flex-column" hide="rotate-bottom-left"  style="background-color:mediumseagreen;">
      <h1>9<sup>th</sup> panel</h1>
      <label>This panel hides rotate-bottom-left</label>
      <div class="flex-row">
        <button onclick="clickPrevPanel(this)">Prev panel</button>
        <button onclick="clickNextPanel(this)">Next panel</button>
      </div>
    </div>
    <div class="flex-column" hide="rotate-bottom-right"  style="background-color:lightblue;">
      <h1>10<sup>th</sup> panel</h1>
      <label>This panel hides rotate-bottom-right</label>
      <div class="flex-row">
        <button onclick="clickPrevPanel(this)">Prev panel</button>
      </div>
    </div>
  </div>
  <script>
    function clickNextPanel(target) {
      let layer = target.closest(".panel-layered > [no-hide]");
      let container = layer.parentElement;
      let nextLayer = layer.nextElementSibling;
      if(nextLayer) VanillaPanelLayered.changeLayer(layer, nextLayer);
    }
    function clickPrevPanel(target) {
      let layer = target.closest(".panel-layered > [no-hide]");
      let container = layer.parentElement;
      let previousLayer = layer.previousElementSibling;
      if(previousLayer) VanillaPanelLayered.changeLayer(layer, previousLayer);
    }
  </script>
</div>

## Basic usage

**A Menu**

```html
<div ui="vanilla" class="panel-layered"> <!-- The container -->
  <div no-hide="">Lorem ipsum</div>      <!-- The child that is visible -->
  <div hide="left">Menu</div>            <!-- The child that is invisible, unselectable and ignore events -->
  <button no-hide=""></button>           <!-- The button that remains on top, to show/hide the menu -->
</div>
```