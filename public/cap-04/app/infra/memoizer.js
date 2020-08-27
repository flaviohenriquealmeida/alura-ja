export function memoizer(fn) {
    return (...args) => {
        const result = fn(...args);
        return result;
    }
}