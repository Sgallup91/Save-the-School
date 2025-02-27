// Initial Game State
let funds = 10000000;
let studentSatisfaction = 75;
let reputation = 70;
let facultyMorale = 80;
let alumniSatisfaction = 80;
let donations = 500000;
let accreditation = "Good";
let studentEnrollment = 5000;

const outcomes = {
    1: {
        message: "You decided to cut an academic program.",
        fundsChange: 1000000,
        studentSatisfactionChange: -10,
        reputationChange: -5,
        facultyMoraleChange: -5,
        accreditationChange: "Risk"
    },
    2: {
        message: "You raised tuition fees for incoming students.",
        fundsChange: 2000000,
        studentSatisfactionChange: -10,
        reputationChange: -10,
        facultyMoraleChange: -5
    },
    3: {
        message: "You reduced faculty salaries.",
        fundsChange: 500000,
        studentSatisfactionChange: -15,
        reputationChange: -10,
        facultyMoraleChange: -25
    },
    4: {
        message: "You launched a fundraising campaign.",
        fundsChange: 3000000,
        alumniSatisfactionChange: -15,
        donationsChange: 3000000
    },
    5: {
        message: "You invested in marketing and recruitment.",
        fundsChange: -2000000,
        studentSatisfactionChange: 5,
        reputationChange: 3,
        facultyMoraleChange: 2,
        studentEnrollmentChange: 500
    },
    6: {
        message: "You upgraded campus facilities.",
        fundsChange: -3000000,
        studentSatisfactionChange: 10,
        reputationChange: 5,
        facultyMoraleChange: 3
    },
    7: {
        message: "You decided to cut a sports program to save money.",
        fundsChange: 500000,
        studentSatisfactionChange: -30,
        reputationChange: -30,
        facultyMoraleChange: -20,
        accreditationChange: "Risk"
    },
    8: {
        message: "You secured a large research grant to boost revenue.",
        fundsChange: 3000000,
        studentSatisfactionChange: 10,
        reputationChange: 10,
        facultyMoraleChange: 5
    },
    9: {
        message: "You invested in upgrading the university's technology infrastructure.",
        fundsChange: -3500000,
        studentSatisfactionChange: 15,
        reputationChange: 8,
        facultyMoraleChange: 5,
        studentEnrollmentChange: 100
    }
};

// Function to handle choices
function makeChoice(choice) {
    const outcome = outcomes[choice];
    
    funds += outcome.fundsChange || 0;
    studentSatisfaction += outcome.studentSatisfactionChange || 0;
    reputation += outcome.reputationChange || 0;
    facultyMorale += outcome.facultyMoraleChange || 0;
    alumniSatisfaction += outcome.alumniSatisfactionChange || 0;
    donations += outcome.donationsChange || 0;
    studentEnrollment += outcome.studentEnrollmentChange || 0;

    if (outcome.accreditationChange === "Risk") {
        accreditation = "At Risk";
    }

    // Update UI with new values
    document.getElementById("funds").textContent = funds.toLocaleString();
    document.getElementById("satisfaction").textContent = studentSatisfaction;
    document.getElementById("reputation").textContent = reputation;
    document.getElementById("facultyMorale").textContent = facultyMorale;
    document.getElementById("alumniSatisfaction").textContent = alumniSatisfaction;
    document.getElementById("donations").textContent = donations.toLocaleString();
    document.getElementById("accreditation").textContent = accreditation;
    document.getElementById("enrollment").textContent = studentEnrollment;

    // Display outcome message with animation
    const outcomeDiv = document.getElementById("outcome");
    outcomeDiv.textContent = outcome.message;
    outcomeDiv.style.animation = "popIn 1s forwards";

    // Check for game-ending conditions
    if (funds <= 0 || studentSatisfaction <= 0 || reputation <= 0 || facultyMorale <= 0 || studentEnrollment <= 1000) {
        outcomeDiv.textContent = "Game over! The university has failed!";
        disableButtons();
    }
}

// Disable buttons after game over
function disableButtons() {
    const buttons = document.querySelectorAll(".decision-btn");
    buttons.forEach(button => button.disabled = true);
}
