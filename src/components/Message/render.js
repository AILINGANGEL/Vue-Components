export default {
  functional: true,
  render: function(createElement, context) {
    return context.props.render(createElement);
  }
}
