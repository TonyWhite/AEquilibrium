class AEquilibrium {
  /* Rename the given attribute */
  static renameAttribute(element, from, to) {
    element.setAttribute(to, element.getAttribute(from));
    element.removeAttribute(from);
  }
}