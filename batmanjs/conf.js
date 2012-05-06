var app = "<%=: app | downcase | underscore  %>";
var controller = "<%=: controller | downcase | underscore  %>";
var model = "<%=: model | downcase | underscore  %>";

var t = module.exports = {
  templates: {
    app: {
      params: {
        app: "application name"
      },
      file: "app.coffee",
      output: app + ".coffee"
    },
    controller: {
      params: {
        contoller: "controller name"
      },
      file: "controller.coffee",
      output: controller + "_controller.coffee"
    },
    model: {
      params: {
        model: "model name"
      },
      file: "model.coffee",
      output: model + ".coffee"
    },
    sample: {
      params: {
        app: "application name",
        controller: "controller name",
        model: "model name"
      },
      dirs: [app + "/controllers", app + "/models"],
      files: [
        ["app.coffee", app + "/" + app + ".coffee"],
        ["controller.coffee", app + "/controllers/" + controller + "_controller.coffee"],
        ["model.coffee", app + "/models/" + model + ".coffee"]
      ]
    }
  }
}
