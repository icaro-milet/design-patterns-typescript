import { MyDatabaseModule } from './db/my-database-module';
import { myDatabaseModule as myDatabaseFromModuleA } from './module-a';

const myDatabaseModule = MyDatabaseModule;

myDatabaseModule.add({name: 'teste 1', age: 26}); // index: 3
myDatabaseModule.add({name: 'teste 2', age: 27}); // index: 4

myDatabaseFromModuleA.remove(2);
myDatabaseModule.remove(3);

myDatabaseModule.show();
console.log('----------------------------------');
console.log(myDatabaseModule === myDatabaseFromModuleA);



