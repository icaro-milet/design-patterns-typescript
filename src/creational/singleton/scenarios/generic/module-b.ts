import { MyDatabaseClassic } from './db/my-database-classic';
import { myDatabaseClassic as myDatabaseClassicFromModuleA } from './module-a'

const myDatabaseClassic = MyDatabaseClassic.getInstance();

myDatabaseClassic.add({name: 'teste 1', age: 26}); // index: 2
myDatabaseClassic.add({name: 'teste 2', age: 27}); // index: 3

myDatabaseClassicFromModuleA.remove(2)
myDatabaseClassic.remove(3)

myDatabaseClassic.show()
console.log('----------------------------------')
console.log(myDatabaseClassic === myDatabaseClassicFromModuleA)



