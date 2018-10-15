FlowRouter.route("/", {
    action: function(params, queryParams) {
        BlazeLayout.render("LayoutPrincipal", {main: "INICIO"});
    }
});
FlowRouter.route("/SOBRE", {
    action: function(params, queryParams) {
        BlazeLayout.render("LayoutPrincipal", {main: "SOBRE"});
    }
});