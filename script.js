const data = [
    [ 'Accountant', 55650 ],
    [ 'Advance Tractor/Trailer Driver', 53550 ],
    [ 'Agricultural Engineer', 56700 ],
    [ 'Architect', 53550 ],
    [ 'Auto Tech/Mechanic', 49350 ],
    [ 'Aviation Tech. Mechanic', 50400 ],
    [ 'Biologist', 54600 ],
    [ 'Bus Driver', 37800 ],
    [ 'Business Development Officer', 54600 ],
    [ 'Business Manager Hotel etc.', 61950 ],
    [ 'CNC Manufacturing', 80850 ],
    [ 'Carpenter', 47250 ],
    [ 'Chef', 52500 ],
    [ 'Chemist', 56700 ],
    [ 'Civil Engineering Technician', 68250 ],
    [ 'Commercial Driver', 51450 ],
    [ 'ComputerTechnician', 46200 ],
    [ 'Conserv./Environ. Science', 72450 ],
    [ 'Correctional Officer', 48300 ],
    [ 'Cosmetologist', 36750 ],
    [ 'Credit Union/Bank Manager', 61950 ],
    [ 'Daycare Director', 37800 ],
    [ 'Dentist', 115500 ],
    [ 'Detective', 60900 ],
    [ 'Diesel Tech/Mechanic', 55650 ],
    [ 'Doctor/Physician', 147000 ],
    [ 'Blectrician', 54600 ],
    [ 'Electronic Engineer', 75600 ],
    [ 'EMT', 34650 ],
    [ 'Energy Management PG&E', 106050 ],
    [ 'Engineer', 72450 ],
    [ 'Fashion Designer', 63000 ],
    [ 'Fire Fighter', 49350 ],
    [ 'Forest Ranger', 52500 ],
    [ 'Graphic/Media Designer', 58800 ],
    [ 'H/C HVAC', 63000 ],
    [ 'Highway Patrol', 84000 ],
    [ 'Home Inspector', 56700 ],
    [ 'Industrial Mechanic', 46200 ],
    [ 'Interior Designer', 49350 ],
    [ 'Investment Analyst', 66150 ],
    [ 'Lab Technician', 42000 ],
    [ 'Landscaper Horticulture', 48300 ],
    [ 'Lawyer', 86100 ],
    [ 'Marketing/Sales Manager', 58800 ],
    [ 'Media/Communications', 45150 ],
    [ 'Medical RepairTech.', 52500 ],
    [ 'Military', 55650 ],
    [ 'Nurse', 66150 ],
    [ 'Nutitionist', 45150 ],
    [ 'Oceanographer', 69300 ],
    [ 'Pastor', 50400 ],
    [ 'PGBEATT Technician', 78750 ],
    [ 'Pharmacist', 105000 ],
    [ 'Photographer', 45150 ],
    [ 'Physical Therapist', 72450 ],
    [ 'Pilot Commercial', 78750 ],
    [ 'Plumber', 52500 ],
    [ 'Police Officer', 53550 ],
    [ 'Principal', 93450 ],
    [ 'Probation Officer', 44100 ],
    [ 'Psychologist', 77700 ],
    [ 'Retail Sales Associate', 34650 ],
    [ 'Social Worker', 50400 ],
    [ 'Solar Energy Tech.', 53550 ],
    [ 'Teacher', 52500 ],
    [ 'UPS/Fed Ex Driver', 68250 ],
    [ 'Veterinarian', 82950 ],
    [ 'Welder/Metal Specialist', 47250 ],
    [ 'Wind EnergyTechnician', 56700 ]
]
let JobInput = document.getElementById("jobinput");
let JobList = document.getElementById('career');
for(job of data){
    let option = document.createElement('option');
    option.value = job[0];
    option.innerText=job[0];
    option.setAttribute('data--salary', job[1]);

    JobList.appendChild(option);
}

JobInput.addEventListener("change", (e) => findSalary());
let Salary = 0;
function findSalary() {
    DesiredJob = JobInput.value;
    for(job of data){
        if (job[0]==DesiredJob) {
            Salary=job[1];
        }
    }
    SetAnnualIncome()
    SetMonthlyIncome()
    SetFederalTaxes()
    SetStateTaxes()
    SetSocialSecurity()
    SetMedicare()
    SetStateDisability()
    SetRetirementInvestment()
    SetMedicalInsurance()
    SetTotalDeductions()
}

// let MonthlyIncome = Salary/12

// GA.addEventListener("change", (c) => findFederalTaxes());
// let FederalTaxes = 0;
// function findFederalTaxes() {
//     if ()
// }

// finds the gross annual income for that job
let AnnualIncome = document.getElementById("GA-1");
function SetAnnualIncome(){
    AnnualIncome.value = "$"+Salary;
}

// calculates the gross monthly income for that job
let MonthlyIncome = document.getElementById("GM");
function SetMonthlyIncome(){
    MonthlyIncome.value = "$"+Math.round(Salary/12);
}


// calculates the federal tax amount per month
let FederalTaxes = document.getElementById("FT");
function SetFederalTaxes(){
    FederalTaxes.value= "$"+Math.round(Salary/12*0.12);
}

// calculates the state tax amount per month
let StateTaxes = document.getElementById("ST");
function SetStateTaxes(){
    StateTaxes.value= "$"+Math.round(Salary/12*0.07);
}

// calculates the social security amount per month
let SocialSecurity = document.getElementById("SS");
function SetSocialSecurity(){
    SocialSecurity.value= "$"+Math.round(Salary/12*0.062);
}

// calculates the medicare amount per month
let Medicare = document.getElementById("MED");
function SetMedicare(){
    Medicare.value= "$"+Math.round(Salary/12*0.0145);
}

// calculates the state disability amount per month
let StateDisability = document.getElementById("SD");
function SetStateDisability(){
    StateDisability.value= "$"+Math.round(Salary/12*0.01);
}

// calculates the retirement investment per month
let RetirementInvestment = document.getElementById("RI");
function SetRetirementInvestment(){
    RetirementInvestment.value= "$"+Math.round(Salary/12*0.05);
}

// calculates the med insurance amount per month
let MedicalInsurance = document.getElementById("MI");
function SetMedicalInsurance(){
    MedicalInsurance.value= "$"+180.00
}

// let TotalDeductions = document.getElementById("TD");
// function SetTotalDeductions(){
//     TotalDeductions.value = "$"+ Number(FederalTaxes) + Number(StateTaxes)
// }


//calculate total deductions help :( 
let TotalDeductions = document.getElementById("TD");
function SetTotalDeductions() {
    // let StateTaxes, FederalTaxes, sum;
    let StateTaxes = (document.getElementById("ST").value);
    let FederalTaxes = (document.getElementById("FT").value);
    sum = StateTaxes + FederalTaxes;
    // document.getElementById("TD").value = sum;
    TotalDeductions.value = "$" + sum;
}




//     let a = document.getElementById("FT").value;
//     let b = document.getElementById("ST").value;
//     // let c = +a + +b;
//     TotalDeductions.value = Number(a) + Number(b);
// }