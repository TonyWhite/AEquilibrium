class AEquilibrium {
  /* Rename the given attribute */
  static renameAttribute(element, from, to) {
    element.setAttribute(to, element.getAttribute(from));
    element.removeAttribute(from);
  }
}

class AEquilibriumPanelLayered {
  static changeLayer(from, to) {
    from.setAttribute("hide", from.getAttribute("no-hide"));
    from.removeAttribute("no-hide");
    to.setAttribute("no-hide", to.getAttribute("hide"));
    to.removeAttribute("hide");
  }
}