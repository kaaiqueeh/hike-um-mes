FlowRouter.route("/", {
    action: function(params, queryParams) {
        BlazeLayout.render("LayoutPrincipal", {main: "inicio"});
    }
});
FlowRouter.route("/SOBRE", {
    action: function(params, queryParams) {
        BlazeLayout.render("LayoutPrincipal", {main: "SOBRE"});
    }
});
