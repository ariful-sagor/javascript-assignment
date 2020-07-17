// Task-1
// Conversion of feet in miles

console.log("Foot to Miles Conversion: <br/><br/>");

function feetToMile(mile) {
    if (mile < 0) {
        mile = "Invalid number. Please enter a positive number.";
        alert(mile);
        console.log(mile);
    } else {
        mile = feet * 0.000189;
        mile = mile.toFixed(4);
        console.log(feet + "ft is equal to " + mile + " miles.");
    }
    return mile;
}
var feet = parseFloat(prompt("Enter Feet value to convert in miles: "));
feetToMile(feet);





// Task-2
// Wood Calculation

console.log("Wood Calculation: <br/><br/>");

function woodCalculator(chairWood, tableWood, bedWood) {
    if (chairWood < 0 || tableWood < 0 || bedWood < 0) {
        totalWood = "Invalid number. Please enter a positive number.";
        alert(totalWood);
        console.log(totalWood);

    } else if ((chairWood % 1 !== 0) || (tableWood % 1 !== 0) || (bedWood % 1 !== 0)) {
        totalWood = "Factional number. Please enter a positive whole number.";
        alert(totalWood);
        console.log(totalWood);
    } else {
        chairWood = chair * 1;
        tableWood = table * 3;
        bedWood = bed * 5;
        totalWood = chairWood + tableWood + bedWood;
        console.log("Total wood needed: " + totalWood + "cft.")
    }
    return totalWood;
}
var totalWood;
var chair = parseFloat(prompt("Enter number of chairs: "));
var table = parseFloat(prompt("Enter number of Tables: "));
var bed = parseFloat(prompt("Enter number of beds: "));

woodCalculator(chair, table, bed);






// Task-3
// Number of bricks according to floor

console.log("Brick Calculation: ");

function brickCalculator(tala) {
    if (tala < 0) {
        brick = "Invalid number. Please enter a positive number.";
        alert(brick);
        console.log(brick);

    } else if (tala % 1 !== 0) {
        brick = "Factional number. Please enter a positive whole number.";
        alert(brick);
        console.log(brick);

    } else {
        if (tala < 11) {
            brick = tala * 15 * 1000;
        } else if (tala < 21) {
            brick = (tala * 12 * 1000) + 150000;
        } else {
            brick = (tala * 10 * 10000) + 270000;
        }
        console.log("Total brick needed: " + brick + " piece");
    }
    return brick;
}
var brick;
var floor = parseFloat(prompt("Enter no. of floor: "))
brickCalculator(floor)




// Task-4
// Smallest name in a friends list

console.log("Smallest name in an array: ");

var friends = [];
while (true) {
    var input = prompt("Enter your friends name: ");
    if (input == "q" || input == "quit" || input == "close" || input === null) {
        break;
    }
    friends.push(input);
}

function tinyFriend(tiny) {
    if (friends.length == 0) {
        alert("There is no element in the array.");
        console.log("There is no element in the array.");
    } else {
        tiny = friends[0];
        for (var i = 0; i < friends.length; i++) {
            var element = friends[i];
            if (element.length < tiny.length) {
                tiny = element;
            }
        }
    }
    return tiny;
}

console.log("List of friends: " + friends);
console.log("Shortest name in friends is: " + tinyFriend());