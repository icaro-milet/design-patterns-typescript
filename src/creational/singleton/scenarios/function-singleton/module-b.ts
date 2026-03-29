import { MyDatabaseFunction } from './db/my-database-function';
import { myDatabaseFunction as myDatabaseFromModuleA } from './module-a';

const myDatabaseFunction = MyDatabaseFunction;

myDatabaseFunction.add({name: 'teste 1', age: 26}); // index: 3
myDatabaseFunction.add({name: 'teste 2', age: 27}); // index: 4

myDatabaseFromModuleA.remove(2);
myDatabaseFunction.remove(3);

myDatabaseFunction.show();
console.log('----------------------------------');
console.log(myDatabaseFunction === myDatabaseFromModuleA);



