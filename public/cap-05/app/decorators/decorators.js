export const logExecutionTime = (method, property, args) => {
    console.log(`Método decorado: ${property}`);
    console.log(`Argumentos do método ${args}`);
    console.time(property);
    const result = method(...args);
    console.timeEnd(property);
    console.log(`resultado do método: ${result}`)
    return result;
};