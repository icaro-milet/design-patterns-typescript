import { MyDatabaseFunction } from './db/my-database-function';

const myDatabaseFunction = MyDatabaseFunction;

myDatabaseFunction.add({name: 'Icaro', age: 26}); // index: 0
myDatabaseFunction.add({name: 'Mari', age: 27}); // index: 1
myDatabaseFunction.add({name: 'Invasor', age: 34}); // index: 2

export { myDatabaseFunction };