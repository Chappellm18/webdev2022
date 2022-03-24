
let f = document.getElementById('bmi-form');
f.addEventListener('submit', calculateBMI);

function calculateBMI(e) {
    e.preventDefault();
    // get value form id=height
    let height = document.getElementById('height').value;
    // get value form id=weight
    let weight = document.getElementById('weight').value;

    // calculate the BMI
    let bmi = weight / (height * height);

    // add the bmi to the id=calculation
    document.getElementById('calculation').innerHTML = bmi;

    let yup;
    if (bmi < 18.5) {
        yup = "Underweight";
    } else if (bmi < 25) {
        yup = "Normal";
    } else if (bmi < 30) {
        yup = "Overweight";
    } else {
        yup = "Obese";
    }

    document.getElementById('fatornot').innerHTML = yup;

}


