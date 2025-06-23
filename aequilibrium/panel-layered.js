class AEquilibriumPanelLayered {
  static changeLayer(from, to) {
    AEquilibrium.renameAttribute(from,"no-hide","hide");
    AEquilibrium.renameAttribute(to,"hide","no-hide");
  }
}