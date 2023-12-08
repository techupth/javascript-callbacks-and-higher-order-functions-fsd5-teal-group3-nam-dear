// Exercise #1: For Each Function

function forEach(array, operation) {
  // ที่ทำหน้าที่ในการบันทึกเงินเดือนของพนักงานหลังจากปรับเพิ่มเงินเดือนแล้ว / ไม่มีการ Return ผลลัพธ์
  for (let i = 0; i < array.length; i++) {
    operation(array[i]);
  }
}

const employeeSalaries = [20005, 40000, 32000, 14500, 344000];
const newEmployeeSalaries = []; // [25005, 45000, 37000, 19500, 349000]

// Using `forEach` function here
function addBonus(price) {
  const newPrice = price + 5000;
  newEmployeeSalaries.push(newPrice);
}

forEach(employeeSalaries, addBonus);
console.log(newEmployeeSalaries);
