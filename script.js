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
    [ 'Mr. Fast', 67000 ],
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

// a big thank you and deserved credit to mr. fast for helping fix my silly little code, colby for getting me started and creating the first function, and paofue for just explaining javascript in a silly little way

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
    SetMonthlyIncome1()
    SetFederalTaxes()
    SetStateTaxes()
    SetSocialSecurity()
    SetMedicare()
    SetStateDisability()
    SetRetirementInvestment()
    SetMedicalInsurance()
    SetTotalDeductions()
    SetTotalDeductions1()
    SetNetMonthly()
    SetMonthlyIncome2()
    SetHousePayment()
}

//finds the gross annual income for that job
let AnnualIncome = document.getElementById("GA-1");
function SetAnnualIncome(){
    AnnualIncome.value = "$"+Salary;
}

let GMI = 0;
let currentBalance = 0;

// let FederalTaxes.value = MonthlyIncome;
// GMI = GAI/12;

// let // add housing affotrd


// let MED = MonthlyIncome * 0.0145; //medicare;













// calculates the gross monthly income for that job
let MonthlyIncome = document.getElementById("GM");
function SetMonthlyIncome(){
    GMI = Math.round(Salary/12);
    currentBalance = GMI;
    MonthlyIncome.value = "$"+ GMI;
}

let MonthlyIncome1 = document.getElementById("GM-1");
function SetMonthlyIncome1(){
    MonthlyIncome1.value = MonthlyIncome.value;
}

let MonthlyIncome2 = document.getElementById("GM-2");
function SetMonthlyIncome2(){
    MonthlyIncome2.value = MonthlyIncome.value;
}

let HousePayment = document.getElementById("HP");
function SetHousePayment(){
    HousePayment.value = "$" + Math.round(GMI*0.33);
}


// calculates the federal tax amount per month
let FederalTaxes = document.getElementById("FT");
function SetFederalTaxes(){
    FederalTaxes.value= "$"+Math.round(GMI*0.12);
    currentBalance -= Math.round(GMI*0.12);
}

// calculates the state tax amount per month
let StateTaxes = document.getElementById("ST");
function SetStateTaxes(){
    StateTaxes.value= "$"+Math.round(GMI*0.07);
    currentBalance -= Math.round(GMI*0.07);
}

// calculates the social security amount per month
let SocialSecurity = document.getElementById("SS");
function SetSocialSecurity(){
    SocialSecurity.value= "$"+Math.round(GMI*0.062);
    currentBalance -= Math.round(GMI*0.062);
}

// calculates the medicare amount per month
let Medicare = document.getElementById("MED");
function SetMedicare(){
    Medicare.value= "$"+Math.round(GMI*0.0145);
    currentBalance -= Math.round(GMI*0.0145);
}

// calculates the state disability amount per month
let StateDisability = document.getElementById("SD");
function SetStateDisability(){
    StateDisability.value= "$"+Math.round(GMI*0.01);
    currentBalance -= Math.round(GMI*0.01);
}

// calculates the retirement investment per month
let RetirementInvestment = document.getElementById("RI");
function SetRetirementInvestment(){
    RetirementInvestment.value= "$"+Math.round(GMI*0.05);
    currentBalance -= Math.round(GMI*0.05);
}

// calculates the med insurance amount per month
let MedicalInsurance = document.getElementById("MI");
function SetMedicalInsurance(){
    MedicalInsurance.value= "$"+180.00;
    currentBalance -= 180.00;
}

//calculate total deductions help :( 
let TotalDeductions = document.getElementById("TD");
function SetTotalDeductions() {
    // let StateTaxes, FederalTaxes, sum;
    // let StateTaxes = parseInt((document.getElementById("ST").value));
    // let FederalTaxes = parseInt((document.getElementById("FT").value));
    // document.getElementById("TD").value = sum;
    sum = GMI - currentBalance;
    TotalDeductions.value = "$" + sum;
}

let TotalDeductions1 = document.getElementById("TD-1");
function SetTotalDeductions1() {
    TotalDeductions1.value = TotalDeductions.value;
}

let NetMonthly = document.getElementById("NMI");
function SetNetMonthly() {
    currentBalance - TotalDeductions.value;
    NetMonthly.value = "$" + currentBalance;
}




//     let a = document.getElementById("FT").value;
//     let b = document.getElementById("ST").value;
//     // let c = +a + +b;
//     TotalDeductions.value = Number(a) + Number(b);
// }

// let TotalDeductions = document.getElementById("TD");
// function SetTotalDeductions(){
//     TotalDeductions.value = "$"+ Number(FederalTaxes) + Number(StateTaxes)
// }

// let TotalDeductions = document.getElementById("TD");
// function SetTotalDeductions() {
//     let TotalDeductions = FederalTaxes + StateTaxes;
//     TotalDeductions.innerText = "$" + TotalDeductions.toFixed(2);
// }


// PDF.addEventListener("change", (d) => findBalance());
// let currentBalance = GMI;
// function findBalance() {
//     currentBalance = GMI - PDF.value;
//     Balance = "$" + currentBalance;
//     }

// let totalMoney = NetMonthly;

// let m = document.getElementById('balance');
// let b = document.getElementById('pdf');
//     m.innerHTML = totalMoney;
//     b.innerHTML = totalMoney;


// for (let i = 0; i < 9; i++) {   
//     let n = getElementById('balance-' + i);
//     for (let x = 0; x < 9; x++) {
//         let j = document.getElementById('pdf' + x);
//         if (x === 1) {
//             n.innerHTML = j + totalMoney;
//         }
//         else if (x > 1 && x < 9){
//             n.innerHTML = j + n;
//         }
//     }
// }