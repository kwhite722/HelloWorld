let person = {
    name: 'Mosh',
    age: 30
};
//Dot Notation
person.name = 'John';

//
person ['name'] = 'Mary';
console.log(person.name);