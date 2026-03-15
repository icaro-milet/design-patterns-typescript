import { MydatabaseModule } from './my-database-module';
import { mydatabaseModule as myDatabaseClassicFromModuleA} from './module-a'

const mydatabaseModule = MydatabaseModule;

mydatabaseModule.add({name: 'teste 1', age: 26}); // index: 2
mydatabaseModule.add({name: 'teste 2', age: 27}); // index: 3

myDatabaseClassicFromModuleA.remove(2)
mydatabaseModule.remove(3)

mydatabaseModule.show()
console.log('----------------------------------')
console.log(mydatabaseModule === myDatabaseClassicFromModuleA)



