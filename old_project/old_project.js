//THE WHOLE LOGIC BELOW IS FOR THE PREVIOUS PROJECT, WITH ALERTS, PROMPTS AND LOOPS --> THIS WAS CHANGED AFTER 2ND DEADLINE.


alert("Welcome to La taberna de Federico!")
access = prompt("Are you a client or an employee?").toLowerCase() //asking if it is a client or not

// if it is not a client or an employee, ask again as many times as necessary until client or employee is answered.
while(access !== "client" && access !== "employee"){
        alert("Intruder!!!")
        access = prompt("Let's try again... are you a client or an employee?").toLowerCase() //putting the prompt in lower case.
}

// if the user is a client, asking what he wants. If it is an employee, get out of here.
let selection
let sumPrices = 0
if (access === "client"){
    selection = prompt("Let's begin then! Have a look at the menu and tell me the ID of what you want to order today.")
} else if (access === "employee"){
    alert("You should not be consulting this menu, you should already know our prices!")
}

// going through the menu list and if the ID entered by the client matches the ID of one of our objects in the menu, get the price and sum it in sumPrices
function cost (foodId) {
    for (i=0; i<menu.length; i++) {
        if (menu[i].id == foodId) {
            sumPrices = sumPrices + menu[i].price
            alert("Ordering this will cost you " + sumPrices + " USD.") //later on adding feature to put as many dishes as one wants and summing all to have the check
        }
    }
}

cost(selection)

// if the user is an employee do nothing. If it is a client and selected a wrong ID, ask to select again.
if (sumPrices === 0 && access === "employee") {
    pass
} else if (sumPrices === 0) {
    let selectionNew = 0
    const menuIds = [1.1, 1.2, 1.3, 2.1, 2.2, 2.3, 3.1, 3.2, 3.3, 4.1, 4.2, 4.3, 5.1, 5.2, 5.3]
    while (isFloat(selectionNew) === false || menuIds.includes(selectionNew) === false) {
        selectionNew = parseFloat(prompt("You didn't choose a correct dish. Please enter only the ID at the left of the name of the dish that you want to order, for example 1.2"))
    }
    cost(selectionNew)
}

// suggest a tip and take into account if the user types a float with comma or dot.
let suggestedTip = 0.1*sumPrices;
let tip
if (access === "employee") {
    pass
} else {
    tip = prompt("Do you want to add a tip? (we suggest 10%, that would be " + suggestedTip + " USD. Please enter only the value, example: 1.2.");
    if (tip.includes(",")){
        tip = tip.replace(",",".")
    }
    tip = parseFloat(tip)
}

// if a string is typed in the previous prompt, no tip would be the default.
if (tip/1 != tip) {
    alert("In that case, I understand that no tip would be included.")
}

// do not take into account tips that are negative, no tip would be the default.
function calcTip(money){
    let finalTip;
    if (money >= 0) {
        finalTip = money;
    } else {
        finalTip = 0
    };
    return finalTip
}

//calculate and inform the total net of the whole meal.
let totalNet = sumPrices + calcTip(tip)
alert("The total of the meal plus tip would be " + totalNet + " USD.")