import { MydatabaseModule } from './my-database-module';

const mydatabaseModule = MydatabaseModule;

mydatabaseModule.add({name: 'Icaro', age: 26}); // index: 0
mydatabaseModule.add({name: 'Mari', age: 27}); // index: 1
mydatabaseModule.add({name: 'Invasor', age: 34}); // index: 2

export { mydatabaseModule };