//  Account Creation and Management:
//? + Allow the user, via prompts, to choose between signing up, logging in, or changing the password.


let runQuestion = true;
let users = [];
while (runQuestion) {
    let choice = prompt(
        "Choose an option:\n- sign up\n- login\n- change password\n(Type 'exit' to cancel)"
    );


    if (choice === null) {
        continue;
    }

    choice = choice.trim().toLowerCase();

    if (choice === "exit") {
        continue;
    }

    //! sign up
    if (choice === "sign up") {
        alert("You are in SIGN UP process");
        signUp();

    }

    //! login
    else if (choice === "login") {
        alert("You are in LOGIN process");

    }

    // !change password
    else if (choice === "change password") {
        alert("You are in CHANGE PASSWORD process");
    }

    else {
        alert("Invalid choice, please try again.");
    }
}


function signUp() {
    alert("SIGN UP (type 'exit' anytime to go back)");

    let name = ValidName();
    if (name === null) {
        alert("Sign up cancelled");
        return;
    }

    alert("Name saved: " + name);

    let email = getValidEmail();
    if (email === null) {
        alert("Sign up cancelled");
        return;
    }
    alert("Email saved: " + email);









    users.push({ name: name, email: email });
    alert("Sign up complete! Total users: " + users.length);
};


function ValidName() {
    while (true) {
        let name = prompt("enter your full Name : ")
        if (name == null) {
            // continue;
        }
        name == name.trim();

        if (name.toLowerCase() === "exit") {
            return null;
        }



        let capitalLetter = name.toLowerCase().split(" ");
        let formatted = "";

        for (let part of capitalLetter) {
            if (part) {
                formatted += part[0].toUpperCase() + part.slice(1) + " ";
            }
        }




        let noSpaces = name.replaceAll(" ", "");
        if (noSpaces.length < 5) {
            alert("Name must be at least 5 characters (without spaces)");
            continue;
        }


        if (!/^[a-zA-Z ]+$/.test(name)) {
            alert("Name must not contain numbers or special characters");
            continue;
        }
        return formatted.trim();
    }
}


function getValidEmail() {
        while (true) {
            let email = prompt("Enter your email:");

            if (email === null) continue;
            email = email.trim().toLowerCase();

            if (email === "exit") return null;

            if (email.includes(" ")) {
                alert("Email must not contain spaces");
                continue;
            }

            if (email.length < 10) {
                alert("Email must be at least 10 characters");
                continue;
            }

            let atCount = email.split("@").length - 1;
            if (atCount !== 1) {
                alert("Email must have  exactly one '@'");
                continue;
            }

            let exists = users.some(u => u.email === email);
            if (exists) {
                alert("Email already exist");
                continue;
            }

            return email;
        }


    }
