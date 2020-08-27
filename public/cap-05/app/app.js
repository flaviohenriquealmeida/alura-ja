import { Person } from './models/person.js';
import { logExecutionTime, inspectMethod } from './decorators/decorators.js';
import { decorate } from './infra/decorate.js';
decorate(
    Person, 
    {
        speak: [logExecutionTime, inspectMethod(true)],
        getFullName: [logExecutionTime]
    }
);

const person = new Person('Flávio', 'Almeida');
// person.getFullName();
person.speak('Tudo bem?');