const baseQuestions = (typeOfEmployee) => [
  {
    name: "name",
    message: `Please, enter the ${typeOfEmployee} name`,
  },
  {
    name: "id",
    message: `Please, enter the ${typeOfEmployee} ID`,
  },
  {
    name: "email",
    message: `Please, enter the ${typeOfEmployee} email address`,
  },
];

const questions = {
  teamManager: [
    ...baseQuestions('manager'),
    {
      name: "officeNumber",
      message: "Please, enter the manager office number",
    },
  ],

  engineer: [
    ...baseQuestions('engineer'),
    {
      name: "github",
      message: "Please, enter the engineer github",
    },
  ],

  intern: [
    ...baseQuestions('intern'),
    {
      name: "school",
      message: "Please, enter the intern school",
    },
  ],

  typeOfEmployee: {
    name: "typeOfEmployee",
    type: "list",
    message: "What type of employee you want to add now?",
    choices: ["Engineer", "Intern", "Finish building team"],
  },
};

module.exports = questions;
