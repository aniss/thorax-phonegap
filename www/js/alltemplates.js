this["Thorax"] = this["Thorax"] || {};
this["Thorax"]["templates"] = this["Thorax"]["templates"] || {};

this["Thorax"]["templates"]["layout"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += " This is my application layout ";
  options = {hash:{
    'id': ("my-layout")
  },data:data};
  buffer += escapeExpression(((stack1 = helpers['layout-element'] || depth0['layout-element']),stack1 ? stack1.call(depth0, options) : helperMissing.call(depth0, "layout-element", options)))
    + "\n";
  return buffer;
  });