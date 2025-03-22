// In Visual Studio Code, write the code that accomplishes the objectives listed below and ensures that the code compiles and runs as directed.
// Comment your code, to prove that you understand what you have written -- this is required!
// Create a new repository on GitHub for this week's assignments and push your code to the repository.
// Record and Upload a Video showcasing your assignment.
// Keep Track of the URLs for this week's GitHub repository and Video upload.
// Start the Quiz to submit your assignment.
// Put the URL for your GitHub repo into the Quiz
// Put the URL for your Video into the Quiz
// Answer the questions
// Coding Steps:
// Create a menu app as seen in this week’s video. What you create is up to you as long as it meets the following requirements:
// Use at least one array.
// Use at least two classes.
// Your menu should have the options to create, view, and delete elements.
// Video Steps:
// Create a video, up to five minutes max, showing and explaining how your project works with an emphasis on the portions you contributed.
// This video should be done using screen share and voice over.
// This can easily be done using Zoom, although you don't have to use Zoom, it's just what we recommend.
// You can create a new meeting, start screen sharing, and start recording.
// This will create a video recording on your computer.
// This should then be uploaded to a publicly accessible site, such as YouTube.
// Ensure the link you share is PUBLIC or UNLISTED!
// If it is not accessible by your grader, your project will be graded based on what they can access.

//Class Car
class Car{ //constructor 1, make and model
    constructor(make, model){ //the constructor takes in the make and model parameters
        this.make = make; //this line assigns the make parameter
        this.model = model; //this line assigns the model parameter
    }
}
 // The Car class is used to create car objects with make and model properties and represnts the basic structure of a car in our inventory.

//Class Menu
class Menu { //constructor 2, contains the array of cars and all methods to manage the car inventory
    constructor() { //this constructor initializes an empty array to store the cars
        this.cars = []; //this is the empty array
    }
    

    //add a car to the menu
    addCar(){ //adds a new car by prompting the user to input a make and a model
        let carMake = prompt("Enter Car Make"); //allows the user to enter the car make
        let carModel = prompt("Enter Car Model"); //allows the user to enter the car model
        this.cars.push(new Car(carMake, carModel)); //this function pushed the new make + model into the list, so if I push "this.cars.push(new car(carMake, carModel));" it will display "carMake carModel"
    }

    //delete cars from the menu
    deleteCar(){ //deletes a car by prompting the user to input an index to remove a car(0,1,2,3,4...)
        let carIndex = prompt("Enter car index to DELETE"); //displays "Enter a car index to DELETE" in the menu app
        this.cars.splice(carIndex, 1); //this is the splice method that removes the specified index
    }
    //view cars from the menu
    viewCars(){ //this will show the cars in the inventory as an alert
        let displayCars = ''; //initialize an empty string to store the car list display
        for (let i = 0; i < this.cars.length; i++) { 
            displayCars += `${i}) ${this.cars[i].make} ${this.cars[i].model}\n`; //make and model will be printed in the inventory list and then \n will add a new line for another listed item/car.    
        }
        alert(`Car Inventory:\n${displayCars}`); //displays a popup with all cars in the inventory, with each on a different line

    }

    //see a menu
showMainMenu(){
    return prompt(`
        Main Menu:
        ----------------
        0) Exit Menu
        1) Add Car
        2) Delete Car
        3) View All Cars
        `);
} //this will display the menu app, with the list of selections for the user input
    
    //start the menu
    start(){
        let selection = this.showMainMenu(); //this is used to get the user's menu selection by showing the main menu and storing their choice

        while(selection != 0){ //this is for any user who decides to select "0" on the menu, so if they select "0" it will not go inside of the rest of the "while" loop, it will just close the menu.

            switch(selection){ //the switch statement handles the users selection

                case "1": this.addCar(); //this is my first case, if the user selects "1" they can add a car to the list, and as long as the selection is not = 0, it will do a case switch
                break;
 
                case "2": this.deleteCar(); //my second case, is if the user selects "2", then they will be able to delete a car
                break;

                case "3": this.viewCars(); //my third case, is if if the user selects "3", then they will be able to view the cars
                break;

                default: selection = 0; //if the user enters an invalid option, the menu will exit by setting the selection to 0

            }
            selection = this.showMainMenu(); //shows the user the menu again to give them another opportunity to reselect an option
        }
        alert("Exiting Menu... Goodbye!"); //this is after they decide to exit the menu, this will then display the exit message "Exiting Menu...Goodbye!"
    }
}


//instantiate(represent) the menu and invoke(call on) the start method
let menu = new Menu(); //this line will create a new instance of the Menu class to start the car inventory application
menu.start(); //this line starts the menu application by calling the start method on our menu instance