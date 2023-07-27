//  variables to keep track of the timesheets and FICA taxes
var timesheets = 0;
var totalFICATaxes = 0;

// Function to calculate salary and update the pay 
function paySalary() {
    var employeeName = document.getElementById("name").value;
    var employeeHours = parseFloat(document.getElementById("hours").value);

    var hourlyRate = 10.00; // Hourly rate of pay
    var regularHours = 40; 
    var overtimeRate = 1.5; // Overtime pay rate

    var regtime = 0.00;
    var overtime = 0.00;
    var salary = 0.00;

    if (employeeHours <= regularHours) {
        regtime = hourlyRate * employeeHours;
    } else {
        regtime = hourlyRate * regularHours;
        // Calculates the overtime pay for hours past 40
        overtime = hourlyRate * overtimeRate * (employeeHours - regularHours);
    }

    // Calculate the total amount (regular pay + overtime pay)
    salary = regtime + overtime;

    document.getElementById("name").innerHTML = "Employee Name: " + employeeName;
    document.getElementById("pay").innerHTML = "Employee Gross Pay: $" + salary.toFixed(2); // Displays the total with 2 decimal places

    // Increase the timesheets count when you click calculate salary
    timesheets++;
}

// tests if all 35 employees' timesheets have been submitted
function testTimesheets() {
    if (timesheets === 35) {
        console.log("All 35 timesheets have been submitted.");
    } else {
        console.log("Timesheet test failed! Only " + timesheets + " timesheets were submitted.");
    }
}


function calculateFICATaxes(salary) {
  
    var ficaTaxRate = 0.0765;
    var ficaTaxAmount = salary * ficaTaxRate;

    // Add the FICA tax amount to the totalFICATaxes
    totalFICATaxes += ficaTaxAmount;
}

// tests if total FICA taxes add up to $19,268.98
function testFICATaxes() {
    var expectedFICATaxes = 19268.98;
    if (totalFICATaxes === expectedFICATaxes) {
        console.log("The FICA taxes test succeeded! Total FICA taxes: $" + totalFICATaxes.toFixed(2));
    } else {
        console.log("The FICA taxes test failed! Expected: $" + expectedFICATaxes.toFixed(2) + ", Actual: $" + totalFICATaxes.toFixed(2));
    }
}


