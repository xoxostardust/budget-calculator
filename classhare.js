// const data = [
//     [ 'Accountant', 55650 ],
//     [ 'Advance Tractor/Trailer Driver', 53550 ],
//     [ 'Agricultural Engineer', 56700 ],
//     [ 'Architect', 53550 ],
//     [ 'Auto Tech/Mechanic', 49350 ],
//     [ 'Aviation Tech. Mechanic', 50400 ],
//     [ 'Biologist', 54600 ],
//     [ 'Bus Driver', 37800 ],
//     [ 'Business Development Officer', 54600 ],
//     [ 'Business Manager Hotel etc.', 61950 ],
//     [ 'CNC Manufacturing', 80850 ],
//     [ 'Carpenter', 47250 ],
//     [ 'Chef', 52500 ],
//     [ 'Chemist', 56700 ],
//     [ 'Civil Engineering Technician', 68250 ],
//     [ 'Commercial Driver', 51450 ],
//     [ 'ComputerTechnician', 46200 ],
//     [ 'Conserv./Environ. Science', 72450 ],
//     [ 'Correctional Officer', 48300 ],
//     [ 'Cosmetologist', 36750 ],
//     [ 'Credit Union/Bank Manager', 61950 ],
//     [ 'Daycare Director', 37800 ],
//     [ 'Dentist', 115500 ],
//     [ 'Detective', 60900 ],
//     [ 'Diesel Tech/Mechanic', 55650 ],
//     [ 'Doctor/Physician', 147000 ],
//     [ 'Electrician', 54600 ],
//     [ 'Electronic Engineer', 75600 ],
//     [ 'EMT', 34650 ],
//     [ 'Energy Management PG&E', 106050 ],
//     [ 'Engineer', 72450 ],
//     [ 'Fashion Designer', 63000 ],
//     [ 'Fire Fighter', 49350 ],
//     [ 'Forest Ranger', 52500 ],
//     [ 'Graphic/Media Designer', 58800 ],
//     [ 'H/C HVAC', 63000 ],
//     [ 'Highway Patrol', 84000 ],
//     [ 'Home Inspector', 56700 ],
//     [ 'Industrial Mechanic', 46200 ],
//     [ 'Interior Designer', 49350 ],
//     [ 'Investment Analyst', 66150 ],
//     [ 'Lab Technician', 42000 ],
//     [ 'Landscaper Horticulture', 48300 ],
//     [ 'lawyer', 86100 ],
//     [ 'Marketing/Sales Manager', 58800 ],
//     [ 'Media/Communications', 45150 ],
//     [ 'Medical RepairTech.', 52500 ],
//     [ 'Military', 55650 ],
//     [ 'Nurse', 66150 ],
//     [ 'Nutritionist', 45150 ],
//     [ 'Oceanographer', 69300 ],
//     [ 'Pastor', 50400 ],
//     [ 'PG&E/ATT Technician', 78750 ],
//     [ 'Pharmacist', 105000 ],
//     [ 'Photographer', 45150 ],
//     [ 'Physical Therapist', 72450 ],
//     [ 'Pilot Commercial', 78750 ],
//     [ 'Plumber', 52500 ],
//     [ 'Police Officer', 53550 ],
//     [ 'Principal', 93450 ],
//     [ 'Probation Officer', 44100 ],
//     [ 'Psychologist', 77700 ],
//     [ 'Retail Sales Associate', 34650 ],
//     [ 'Social Worker', 50400 ],
//     [ 'Solar Energy Tech.', 53550 ],
//     [ 'Teacher', 52500 ],
//     [ 'UPS/Fed Ex Driver', 68250 ],
//     [ 'Veterinarian', 82950 ],
//     [ 'Welder/Metal Specialist', 47250 ],
//     [ 'Wind EnergyTechnician', 56700 ]
// ]

// let buttons = document.getElementById("buttons");
// for (job of data) {
//     let section = document.createElement("section");
//     let button = document.createElement("button");
//     let par = document.createElement("p");
//     button.innerText = job[0];
//     par.innerText = "$" + job[1];
//     button.setAttribute("onclick", "updateIncome("+job[1]+")");
//     section.append(button);
//     section.append(par);
//     buttons.appendChild(section);
// }

// let grossMonthlyElems = document.getElementsByClassName('grossMonthly');
// console.log(grossMonthlyElems); 

// let YrIncome;
// let mnIncome;
// let mnIncome2;
// let mnIncome3;
// let mnIncome4;
// let mnIncome5;
// let mnIncome6;
// let mnIncome7;
// let mnIncome8;
// let fedTax;
// let stateTax;
// let SS;
// let med;
// let stDis
// let retInv;
// let medIn;
// let totalDec;
// let mn;

// function updateIncome (income) {
//     console.log("$" + income);
//     document.getElementById("Calculator").scrollIntoView();
//     YrIncome = document.getElementById("10");
//     let a = income;
//     YrIncome.innerText = "$" + a.toFixed(2);

//     mnIncome = document.getElementById("11");
//     let b = (income / 12);
//     mnIncome.innerText = "$" + b.toFixed(2);

//     mnIncome2 = document.getElementById("12");
//     mnIncome2.innerText = "$" + b.toFixed(2);

//     mnIncome3 = document.getElementById("14");
//     mnIncome3.innerText = "$" + b.toFixed(2);

//     mnIncome4 = document.getElementById("16");
//     mnIncome4.innerText = "$" + b.toFixed(2);

//     mnIncome5 = document.getElementById("18");
//     mnIncome5.innerText = "$" + b.toFixed(2);

//     mnIncome6 = document.getElementById("20");
//     mnIncome6.innerText = "$" + b.toFixed(2);

//     mnIncome7 = document.getElementById("22");
//     mnIncome7.innerText = "$" + b.toFixed(2);

//     mnIncome2 = document.getElementById("26");
//     mnIncome2.innerText = "$" + b.toFixed(2);

//     fedTax = document.getElementById("13");
//     let c = ((income / 12) * .12);
//     fedTax.innerText = "$" + c.toFixed(2);

//     stateTax = document.getElementById("15");
//     let d = ((income / 12) * .07);
//     stateTax.innerText = "$" + d.toFixed(2);

//     SS = document.getElementById("17");
//     let e = ((income / 12) * .062);
//     SS.innerText = "$" + e.toFixed(2);

//     med = document.getElementById("19");
//     let f = ((income / 12) * .0145);
//     med.innerText = "$" + f.toFixed(2);

//     stDis = document.getElementById("21");
//     let g = ((income / 12) * .01);
//     stDis.innerText = "$" + g.toFixed(2);

//     retInv = document.getElementById("23");
//     let h = ((income / 12) * .0145);
//     retInv.innerText = "$" + h.toFixed(2);

//     medIn = document.getElementById("25");
//     let i = 180;
//     medIn.innerText = "$" + i;

//     totalDec = document.getElementById("27");
//     let j = c + d + e + f + g + h + i;
//     totalDec.innerText = "- $" + j.toFixed(2);

//     mn = document.getElementById("28");
//     let k = b - j;
//     mn.innerText = "$" + k.toFixed(2);

//     hp = document.getElementById("29");
//     let l = b/3;
//     hp.innerText = "$"+l.toFixed(2);


//     doCalcCheck
// }

// for(let i = 1;i<=8;i++){
//     let With;
//     let Dep;
//     eval(`With = document.getElementById("WithDrawl${i}");`);
//     eval(`Dep = document.getElementById("Deposit${i}");`);
//     With.addEventListener("change", (e) => doCalcCheck());
//     Dep.addEventListener("change", (e) => doCalcCheck());
//     With.value=0;
//     Dep.value=0;
// }

// function doCalcCheck(){
//     for(let i = 1;i<=8;i++){
//         CheckCalc(i)
//     }
// }

// function CheckCalc(row){
    
//     let With;
//     let Dep;
//     let sal;
//     let prevVal;
//     if(document.getElementById(`WithDrawl${row}`).value==""){
//         document.getElementById(`WithDrawl${row}`).value=0;
//     }
//     if(document.getElementById(`Deposit${row}`).value==""){
//         document.getElementById(`Deposit${row}`).value=0;
//     }
//     eval(`With = document.getElementById("WithDrawl${row}");`);
//     eval(`Dep = document.getElementById("Deposit${row}");`);
//     eval(`sal = document.getElementById("remainingMoney${row}");`);
//     if(row == 1){
//         prevVal = document.getElementById("28");
//     }else{
//         eval(`prevVal = document.getElementById("remainingMoney${row-1}");`);
//     }
//     sal.textContent = "$" +(parseFloat(prevVal.innerText.replace("$",""))-parseFloat(With.value)+parseFloat(Dep.value));
// }

