// Change text size

function increase() {
    const style = getComputedStyle(document.body);
    const max = parseFloat(style.getPropertyValue('--max-font-size'));
    const value = parseFloat(style.getPropertyValue('--font-size'));
    document.body.style.setProperty('--font-size', Math.min(value + 2, max));
}

function decrease() {
    const style = getComputedStyle(document.body);
    const min = parseFloat(style.getPropertyValue('--min-font-size'));
    const value = parseFloat(style.getPropertyValue('--font-size'));
    document.body.style.setProperty('--font-size', Math.max(value - 2, min));
}
