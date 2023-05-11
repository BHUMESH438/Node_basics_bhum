// console.log('die name>>>>>>>>>>>>>>>>', __dirname);
// console.log('file name>>>>>>>>>>>>>>>>', __filename);
// setInterval(() => console.log('hi'), 3000);

// console.log(module); //its global

//#type1 module.export - in this we can directly give the variable name as in es6
const name1 = 'bhumesh1';
const name2 = 'bhumesh2';
const name3 = 'bhumesh3';

module.exports = { name1, name2, name3 };

//#type2 module.export - in this we can give the module.export along with the variable

module.exports.name4 = 'bhumesh4';
module.exports.name5 = 'bhumesh5';
module.exports.name6 = 'bhumesh6';

//#type3 module.export - in this we can decalre a variable and can change the export obj properties
const name7 = { name: 'bhumesh1' };
const name8 = { name: 'bhumesh8' };
const name9 = { name: 'bhumesh9' };

module.exports.siglemom1 = name7;
module.exports.siglemom2 = name8;
module.exports.siglemom3 = name9;

//#type 4 exporting a function

//#1. giving export to the function annosonymously so that no variables are needed
module.exports.func1 = arg => console.log(`1.along with module.exports${arg}`);
//#2. defining the function in a module and using that function in other modules -  Exporting a single functio
const func2 = arg => console.log(`2.sperate export with flower brackets${arg}`);
module.exports = func2;
//#3. exporting multiple function, we can also define our func within our obj ie export obj
const func3 = arg => console.log(`3.seperate exports with property/name change${arg}`);
const func4 = arg => console.log(`3.seperate exports with property/name change${arg}`);
const func5 = arg => console.log(`3.seperate exports with property/name change${arg}`);
const func6 = arg => console.log(`3.seperate exports with property/name change${arg}`);

module.exports = {
  function3: func3,
  func4,
  function5: func5,
  func6
};

//#type 5 if we explained and invoked a module within a folder and just gave the path name outside in some other folder it will execute
let a;
let b;
a = 1;
b = 2;
const func61 = () => console.log(`3.seperate exports with property/name change ${a + b}`);
func61();
