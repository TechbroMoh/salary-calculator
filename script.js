// PAYE calculation based on the provided tax brackets
function calculatePAYE(grossSalary) {
    let paye = 0;
  
    if (grossSalary <= 24000) {
      paye = grossSalary * 0.10;
    } else if (grossSalary <= 32333) {
      paye = 2400 + (grossSalary - 24000) * 0.25;
    } else if (grossSalary <= 500000) {
      paye = 2400 + 2083.25 + (grossSalary - 32333) * 0.30;
    } else if (grossSalary <= 800000) {
      paye = 2400 + 2083.25 + 140000.1 + (grossSalary - 500000) * 0.325;
    } else {
      paye = 2400 + 2083.25 + 140000.1 + 97500 + (grossSalary - 800000) * 0.35;
    }
  
    // Subtract personal relief of Ksh 2,400
    paye -= 2400;
    paye = Math.max(paye, 0); // PAYE cannot be negative
  
    return paye;
  }
  
  // NHIF calculation based on the provided brackets
  function calculateNHIF(grossSalary) {
    let nhif = 0;
  
    if (grossSalary <= 5999) {
      nhif = 150;
    } else if (grossSalary <= 7999) {
      nhif = 300;
    } else if (grossSalary <= 11999) {
      nhif = 400;
    } else if (grossSalary <= 14999) {
      nhif = 500;
    } else if (grossSalary <= 19999) {
      nhif = 600;
    } else if (grossSalary <= 24999) {
      nhif = 750;
    } else if (grossSalary <= 29999) {
      nhif = 850;
    } else if (grossSalary <= 34999) {
      nhif = 900;
    } else if (grossSalary <= 39999) {
      nhif = 950;
    } else if (grossSalary <= 44999) {
      nhif = 1000;
    } else if (grossSalary <= 49999) {
      nhif = 1100;
    } else if (grossSalary <= 59999) {
      nhif = 1200;
    } else if (grossSalary <= 69999) {
      nhif = 1300;
    } else if (grossSalary <= 79999) {
      nhif = 1400;
    } else if (grossSalary <= 89999) {
      nhif = 1500;
    } else if (grossSalary <= 99999) {
      nhif = 1600;
    } else {
      nhif = 1700;
    }
  
    return nhif;
  }
  
  // NSSF calculation based on the provided brackets
  function calculateNSSF(grossSalary) {
    let nssfTier1 = Math.min(grossSalary, 7000) * 0.06;
    let nssfTier2 = Math.max(0, Math.min(grossSalary - 7000, 36000 - 7000)) * 0.06;
    return nssfTier1 + nssfTier2;
  }
  
  // Function to calculate housing levy
  function calculateHousingLevy(grossSalary) {
    return grossSalary * 0.015;
  }
  
  // Function to calculate net salary
  function calculateNetSalary(basicSalary, benefits) {
    let grossSalary = basicSalary + benefits;
    let paye = calculatePAYE(grossSalary);
    let nhif = calculateNHIF(grossSalary);
    let nssf = calculateNSSF(grossSalary);
    let housingLevy = calculateHousingLevy(grossSalary);
  
    let totalDeductions = paye + nhif + nssf + housingLevy;
    let netSalary = grossSalary - totalDeductions;
  
    return {
      grossSalary,
      paye,
      nhif,
      nssf,
      housingLevy,
      netSalary
    };
  }
  
  // Example usage
  let basicSalary = 50000;
  let benefits = 10000;
  
  let salaryDetails = calculateNetSalary(basicSalary, benefits);
  
  console.log(`Gross Salary: ${salaryDetails.grossSalary}`);
  console.log(`PAYE: ${salaryDetails.paye}`);
  console.log(`NHIF: ${salaryDetails.nhif}`);
  console.log(`NSSF: ${salaryDetails.nssf}`);
  console.log(`Housing Levy: ${salaryDetails.housingLevy}`);
  console.log(`Net Salary: ${salaryDetails.netSalary}`);
  