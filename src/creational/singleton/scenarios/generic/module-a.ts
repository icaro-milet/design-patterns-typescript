import { MyDatabaseClassic } from './db/my-database-classic';

const myDatabaseClassic = MyDatabaseClassic.getInstance();

myDatabaseClassic.add({name: 'Icaro', age: 26}); // index: 0
myDatabaseClassic.add({name: 'Mari', age: 27}); // index: 1
myDatabaseClassic.add({name: 'Invasor', age: 34}); // index: 2

export { myDatabaseClassic };