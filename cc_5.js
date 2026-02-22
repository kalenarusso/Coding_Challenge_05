// Step 2

let employees = [
    { name: "Alex",
        hourlyRate: 15,
        hoursWorked: 40
    },
    { name: "Sam",
        hourlyRate: 20,
        hoursWorked: 35 
    },
    { name: "Jamie",
        hourlyRate: 18,
        hoursWorked: 45 
    }
];

// Step 3

function calculateBasePay(rate, hours) {
    if (hours <= 40) {
        return rate * hours;
    } else {

// Step 4
        function calculateOvertimePay(rate, hours) {
            let overtimeHours = hours - 40;
            return overtimeHours * rate * 1.5;
        }
        return (40 * rate) + calculateOvertimePay(rate, hours);
    };
};

// Step 5
let tax = 0.15;
function calculateTaxes(basePay) {
    return basePay * (1-tax);
};

// Step 6
function processPayroll (employee) {
    let basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
    let netPay = calculateTaxes(basePay);
    return {
        name: employee.name,
        basePay: employee.hourlyRate * Math.min(employee.hoursWorked, 40),
        overtimePay: basePay - (employee.hourlyRate * Math.min(employee.hoursWorked, 40)),
        grossPay: basePay,
        netPay: netPay
    };
};

// Step 7
for (i=0; i < employees.length; i++) {
    let payrollInfo = processPayroll (employees[i]);
    console.log(`Name: ${payrollInfo.name}`);
    console.log(`Base Pay: $${payrollInfo.basePay.toFixed(2)}`);
    console.log(`Overtime Pay: $${payrollInfo.overtimePay.toFixed(2)}`);
    console.log(`Gross Pay: $${payrollInfo.grossPay.toFixed(2)}`);
    console.log(`Net Pay: $${payrollInfo.netPay.toFixed(2)}`);
    console.log('-----------------------------');
};
