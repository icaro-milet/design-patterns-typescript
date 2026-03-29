import { MyDatabaseModule } from './db/my-database-module';

const myDatabaseModule = MyDatabaseModule;

myDatabaseModule.add({name: 'Icaro', age: 26}); // index: 0
myDatabaseModule.add({name: 'Mari', age: 27}); // index: 1
myDatabaseModule.add({name: 'Invasor', age: 34}); // index: 2

export { myDatabaseModule };