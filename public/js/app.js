// !! Account Creation and Management:

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

// ** sign up function
function signUp() {
    alert("SIGN UP");

    let name = ValidName();
    if (name === null) {
        alert("Sign up cancelled");
        return;
    }

    alert("Name saved: " + name);

    let email = ValidEmail();
    if (email === null) {
        alert("Sign up cancelled");
        return;
    }
    alert("Email saved: " + email);

    let age = validAge();
    if (age === null) {
        alert("unvalid")
        return;
    }
    alert("age saved : " + age)


    let password = validPassword();
    if (password === null) {
        alert("invalide password")
        return;
    } alert("password saved : " + password)





    users.push({ name: name, email: email, age: age, password: password });
    alert("Sign up complete! Total users: " + users.length);
    alert ("you can login now")
  return;
};
// ** validation de name
function ValidName() {
    while (true) {
        let name = prompt("enter your full Name : ")
        if (name === null){
            return null;
        } 

        name = name.trim();

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

// ** validation d'email
function ValidEmail() {
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
// ** validations d'age
function validAge() {
    while (true) {
        let age = prompt("enter your age")
        if (age === null) continue;

        if (age === "exit") return null;

        age = age.trim();

        if (!/^\d+$/.test(age)) {
            alert("Age must contain only digits");
            continue;
        }
        if (age.length === 0 || age.length >= 3) {
            alert("Age must be 1 or 2 digits only");
            continue;
        }
        age = parseInt(age);

        return age;
    }
}

// ** validation de psswd
function validPassword() {
    while (true) {
        let password = prompt("Enter your password: ");
        if (password === null) continue;

        password = password.trim();

        if (password.toLowerCase() === "exit") return null;


        if (password.includes(' ')) {
            alert("Password cannot contain spaces");
            continue;
        }
        if (password.length < 7) {
            alert("Password must be at least 7 characters");
            continue;
        }


        let specialChars = /[@#\-+\*\/]/;
        if (!specialChars.test(password)) {
            alert("Password must contain at least one special character: @ # - + * /");
            continue;
        }

        // !!   confirmation de psswd
        let rePsswd = prompt("confirme your password")
        if (rePsswd === null) continue;
       if (rePsswd !== password) {
            alert("uncorrect password, Please try again.");
            continue; 
        }

        return password;
    }
}





