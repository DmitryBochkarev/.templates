var app = "<%=: app | downcase | underscore  %>";
var controller = "<%=: controller | downcase | underscore  %>";
var model = "<%=: model | downcase | underscore  %>";

module.exports = {
  templates: {
    app: {
      file: "app.coffee",
      output: app + ".coffee"
    },
    controller: {
      file: "controller.coffee",
      output: controller + "_controller.coffee"
    },
    model: {
      file: "model.coffee",
      output: model + ".coffee"
    },
    sample: {
      dirs: [app + "/controllers", app + "/models"],
      files: [
        ["app.coffee", app + "/" + app + ".coffee"],
        ["controller.coffee", app + "/controllers/" + controller + "_controller.coffee"],
        ["model.coffee", app + "/models/" + model + ".coffee"]
      ]
    }
  }
}
