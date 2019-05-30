// class Employee extends Model {}
// Employee.init({
//   name: {
//     type: Sequelize.STRING,
//     allowNull: false,
//     get() {
//       const title = this.getDataValue('title');
//       // 'this' allows you to access attributes of the instance
//       return this.getDataValue('name') + ' (' + title + ')';
//     },
//   },
//   title: {
//     type: Sequelize.STRING,
//     allowNull: false,
//     set(val) {
//       this.setDataValue('title', val.toUpperCase());
//     }
//   }
// }, { sequelize, modelName: 'employee' });

// Employee
//   .create({ name: 'John Doe', title: 'senior engineer' })
//   .then(employee => {
//     console.log(employee.get('name')); // John Doe (SENIOR ENGINEER)
//     console.log(employee.get('title')); // SENIOR ENGINEER
//   })