import { Component, OnInit } from "@angular/core";
import { EmployeeService } from "../employee.service";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"],
})
export class EmployeeListComponent implements OnInit {
  emps;

  dynamicArray: any = {};
  showAddRow = false;
  constructor(private empService: EmployeeService) {}

  ngOnInit() {
    this.emps = this.empService.getEmployees();
  }
  addRowFirst() {
    this.showAddRow = true;
  }

  addRow() {
    console.log(this.dynamicArray);
    this.emps.push(this.dynamicArray);
    this.showAddRow = false;
  }
  editEmployee(emp, index) {
    console.log(emp);
    this.dynamicArray = emp;
  }
  editRecord(index) {
    this.emps[index] = this.dynamicArray;
  }
  deleteEmployee(id) {
    for (let i = 0; i < this.emps.length; i++) {
      if (this.emps[i].id == id) {
        this.emps.splice(i, 1);
      }
    }

    // this.empService.deleteEmployee(id);
  }

  // let newEmployee = {
  //     id:uuid(),
  //     firstName: this.form.value.firstName,
  //     lastName: this.form.value.lastName,
  //     languages: this.form.value.languages,

  //   }
  //   this.emps.push(newEmployee);
  //   this.empService.addEmployee(newEmployee);
  //   this.router.navigate(['employee-list']);
}
