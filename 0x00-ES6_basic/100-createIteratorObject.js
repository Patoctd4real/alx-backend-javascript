export default function createIteratorObject(report) {
  const employees = [];
  for (const [department, departmentEmployees] of Object.entries(report.allEmployees)) {
    employees.push(...departmentEmployees);
  }
  return employees;
}

