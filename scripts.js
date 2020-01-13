// BMI function below 
const BMI = () => {
    let userWeight = Number(document.getElementById("weightinput").value);
    let userHeight = Number(document.getElementById("heightinput").value);
    let BMIresult = Math.floor(userWeight / (userHeight / 100 * userHeight / 100));
    
    if (BMIresult >= 0) {
    document.getElementById("bmiresult").innerHTML = "Your BMI is: " + BMIresult;
    } else {
        document.getElementById("bmiresult").innerHTML = "Seems to be an error";
    }
}

// CrCl function below
// Will need to capture 4 inputs

const CrCl = () => {
    // capture inputs
    let userAge = document.getElementById("ageinput").value;
    let userWeight2 = Number(document.getElementById("weightinput2").value);
    let userGender = document.getElementById("genderinput").value;
    let userSCR = Number(document.getElementById("sCrinput").value);

    // find two parts needed for CrCl calculation
    let calcone = (140 - userAge) * userWeight2;
    let calctwo = userSCR * 72;

    // final equation for CrCl, need to add female 0.85 factor below
    let finalCrCl = Math.floor(calcone / calctwo);
    let finalCrClf = Math.floor(calcone / calctwo) * 0.85;

    // if else statement to print M or F value
    if(userGender === "M" || "Male") {
        document.getElementById("finalCrCl").innerHTML = "Since you're male, your CrCl is " + finalCrCl;
    } else if(userGender === "F" || "Female") {
        document.getElementById("finalCrClf").innerHTML = "Since you're female, your CrCl is " + finalCrClf;
    } else {
        // error message
        document.getElementById("finalCrCl").innerHTML = "Oops!, something went wrong."
    }

}