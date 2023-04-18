export default function createIteratorObject(report) {
  let currentDeptIndex = 0;
  let currentEmployeeIndex = 0;
  const departments = Object.values(report.allEmployees);

  return {
    next() {
      if (currentDeptIndex >= departments.length) {
        // No more departments to iterate through
        return { done: true };
      }

      const currentDept = departments[currentDeptIndex];
      if (currentEmployeeIndex >= currentDept.length) {
        // Move on to the next department
        currentDeptIndex++;
        currentEmployeeIndex = 0;
        return this.next(); // Recursive call to move to the next employee
      }

      // Return the next employee in the current department
      const nextEmployee = currentDept[currentEmployeeIndex];
      currentEmployeeIndex++;
      return { value: nextEmployee, done: false };
    },
  };
}


