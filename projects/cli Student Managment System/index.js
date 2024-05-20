import inquirer from 'inquirer';
// Class representing a student
class Student {
    // Constructor to initialize a new student
    constructor(name) {
        this._id = Student.idCounter++;
        this._name = name;
        this._courses = [];
        this._balance = 0;
        this._paymentHistory = [];
    }
    // Getter for student ID
    get id() {
        return this._id;
    }
    // Getter for student name
    get name() {
        return this._name;
    }
    // Getter for courses the student is enrolled in
    get courses() {
        return this._courses;
    }
    // Getter for student's balance
    get balance() {
        return this._balance;
    }
    // Method to enroll a student in a course
    enroll(course) {
        // Check if the student is already enrolled in the course
        if (this._courses.includes(course)) {
            console.log(`Already enrolled in ${course}.`);
            return;
        }
        // Add course to the student's list of courses and update balance
        if (Student.courseFees[course] !== undefined) {
            this._courses.push(course);
            this._balance += Student.courseFees[course];
        }
        else {
            console.log(`Course ${course} does not exist.`);
        }
    }
    // Method to pay tuition fee
    payTuition(amount) {
        // Check if the payment exceeds the current balance
        if (amount > this._balance) {
            console.log(`Payment amount $${amount} exceeds the current balance $${this._balance}.`);
            amount = this._balance; // Pay only the remaining balance
        }
        // Update balance and add to payment history
        this._balance -= amount;
        this._paymentHistory.push({ date: new Date(), amount: amount });
        console.log(`Paid $${amount}. Remaining balance: $${this._balance}`);
    }
    // Method to view the current balance
    viewBalance() {
        return this._balance;
    }
    // Method to show the status of the student
    showStatus() {
        console.log(`Name: ${this._name}`);
        console.log(`ID: ${this._id}`);
        console.log(`Courses Enrolled: ${this._courses.join(', ')}`);
        console.log(`Balance: $${this._balance}`);
    }
    // Method to show the payment history
    showPaymentHistory() {
        console.log(`Payment History for ${this._name} (ID: ${this._id}):`);
        this._paymentHistory.forEach((payment, index) => {
            console.log(`${index + 1}. Date: ${payment.date.toLocaleDateString()} - Amount: $${payment.amount}`);
        });
    }
}
// Static counter for generating unique student IDs
Student.idCounter = 10000;
// Static map of course fees
Student.courseFees = {
    "TypeScript": 3000,
    "Python": 4000,
    "NextJs": 5000,
    "DevOps": 6000,
    "AI & Machine Learning": 10000
};
// Main program class
class Program {
    // Main method to run the program
    static async main() {
        let action;
        do {
            // Clear console and show header
            console.clear();
            console.log(`\n\t\t************* Student Management System *************\n`);
            // Prompt user for action
            action = await inquirer.prompt({
                name: 'action',
                type: 'list',
                message: 'What would you like to do?',
                choices: ['Add a new student', 'Select a student', 'Exit'],
            });
            // Handle user action
            switch (action.action) {
                case 'Add a new student':
                    console.clear();
                    console.log(`\n\t\t************* Student Management System *************\n`);
                    // Prompt for student name
                    const studentName = await inquirer.prompt({
                        name: 'name',
                        type: 'input',
                        message: 'Enter the student name:',
                        validate: (input) => input.trim() !== '' || 'Name is required!'
                    });
                    // Create a new student and add to list
                    const student = new Student(studentName.name);
                    Program.students.push(student);
                    console.log(`Student ${student.name} with ID ${student.id} added.`);
                    break;
                case 'Select a student':
                    if (Program.students.length === 0) {
                        console.log('No students available. Please add a student first.');
                    }
                    else {
                        console.clear();
                        console.log(`\n\t\t************* Student Management System *************\n`);
                        // Prompt to select a student
                        const studentChoices = Program.students.map((s) => ({
                            name: `${s.name} (ID: ${s.id})`,
                            value: s.id,
                        }));
                        const selectedStudentId = await inquirer.prompt({
                            name: 'studentId',
                            type: 'list',
                            message: 'Select a student:',
                            choices: studentChoices,
                        });
                        // Find the selected student
                        const selectedStudent = Program.students.find((s) => s.id === selectedStudentId.studentId);
                        if (selectedStudent) {
                            // Manage the selected student
                            await Program.manageStudent(selectedStudent);
                        }
                    }
                    break;
                case 'Exit':
                    console.log('Exiting...');
                    break;
            }
        } while (action.action !== 'Exit');
    }
    // Method to manage student actions
    static async manageStudent(student) {
        let action;
        do {
            // Clear console and show header
            console.clear();
            console.log(`\n\t\t************* Student Management System *************\n`);
            console.log(`Managing student ${student.name} (ID: ${student.id})`);
            // Prompt user for action
            action = await inquirer.prompt({
                name: 'action',
                type: 'list',
                message: 'What would you like to do?',
                choices: ['Enroll in a course', 'View balance', 'Pay tuition', 'Show status', 'Show payment history', 'Back'],
            });
            // Handle user action
            switch (action.action) {
                case 'Enroll in a course':
                    // Prompt for course to enroll in
                    const course = await inquirer.prompt({
                        name: 'course',
                        type: 'list',
                        choices: ["TypeScript", "Python", "NextJs", "DevOps", "AI & Machine Learning"],
                        message: 'Select a course to enroll:',
                    });
                    student.enroll(course.course);
                    console.log(`Enrolled in ${course.course}. Fee: $${Student.courseFees[course.course]}`);
                    break;
                case 'View balance':
                    console.log(`Balance: $${student.viewBalance()}`);
                    break;
                case 'Pay tuition':
                    // Prompt for payment amount
                    const amount = await inquirer.prompt({
                        name: 'amount',
                        type: 'input',
                        message: 'Enter the amount to pay:',
                        validate: (input) => {
                            const amount = parseFloat(input);
                            return !isNaN(amount) && amount > 0 || 'Please enter a valid amount!';
                        }
                    });
                    const paymentAmount = parseInt(amount.amount);
                    if (!isNaN(paymentAmount)) {
                        student.payTuition(paymentAmount);
                    }
                    else {
                        console.log('Invalid amount entered.');
                    }
                    break;
                case 'Show status':
                    student.showStatus();
                    break;
                case 'Show payment history':
                    student.showPaymentHistory();
                    break;
                case 'Back':
                    console.log('Going back to main menu...');
                    break;
            }
            // Pause before returning to the menu
            if (action.action !== 'Back') {
                await inquirer.prompt({
                    name: 'continue',
                    type: 'input',
                    message: 'Press Enter to continue...',
                });
            }
        } while (action.action !== 'Back');
    }
}
// Array to store students
Program.students = [];
// Run the main program
Program.main();
