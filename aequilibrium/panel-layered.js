class AEquilibriumPanelLayered {
  static changeLayer(from, to) {
    from.setAttribute("hide", from.getAttribute("no-hide"));
    from.removeAttribute("no-hide");
    to.setAttribute("no-hide", to.getAttribute("hide"));
    to.removeAttribute("hide");
  }
}