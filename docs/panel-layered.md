# Panel Layered

![Static Badge](https://img.shields.io/badge/Version-Beta-yellow)
![Static Badge](https://img.shields.io/badge/Status-Testing-yellow)

## Description

The `[ui=vanilla].panel-layered` element is a container for overlapping layers.

## Overview

<iframe width="100%" height="400px" src="../examples/panel-layered.html" frameborder="0"></iframe>

## Basic usage

**A Menu**

```html
<div ui="vanilla" class="panel-layered"> <!-- The container -->
  <div no-hide="">Lorem ipsum</div>      <!-- The child that is visible -->
  <div hide="left">Menu</div>            <!-- The child that is invisible, unselectable and ignore events -->
  <button no-hide=""></button>           <!-- The button that remains on top, to show/hide the menu -->
</div>
```