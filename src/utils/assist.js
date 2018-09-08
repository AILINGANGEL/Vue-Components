export function oneOf(value, options) {
    return options.indexOf(value) !== -1;
}

export function findChildComponents(context, componentName) {
    // console.log(context);
    let children = context.$children.filter(child => {
        // console.log(child.$options.name);
        return child.$options.name === componentName
    });
    // console.log(children);
    return children;
}