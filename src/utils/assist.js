export function oneOf(value, options) {
    return options.indexOf(value) !== -1;
}

export function findChildComponents(context, componentName) {
    let children = context.$children.filter(child => {
        return child.$options.name === componentName
    });
    return children;
}