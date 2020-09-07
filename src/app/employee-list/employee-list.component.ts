import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-employee-list",
  templateUrl: "./employee-list.component.html",
  styleUrls: ["./employee-list.component.css"],
})
export class EmployeeListComponent implements OnInit {
  employees = [];
  editInline = false;
  editIndex = -1;
  employee: any = {};
  showAddRow = false;

  ngOnInit() {
    this.getData();
  }

  addRowForm() {
    this.employee = {};
    this.showAddRow = true;
  }

  addRow() {
    this.employees.unshift({
      firstName: this.employee.firstName,
      lastName: this.employee.lastName,
      guest: this.employee.guest,
      checkIn: this.employee.checkIn,
    });
    this.cancel();
    this.setData();
  }

  showEditForm(emp, index) {
    this.showAddRow = false;
    this.editIndex = index;
    this.editInline = true;
    this.employee = Object.assign(this.employee, emp);
  }

  saveRecord(index) {
    this.employees[index] = this.employee;
    this.setData();
    this.cancel();
  }

  cancel() {
    this.editIndex = -1;
    this.editInline = false;
    this.employee = {};
    this.showAddRow = false;
  }

  deleteEmployee(index) {
    this.employees.splice(index, 1);
    this.setData();
  }

  getData() {
    this.employees = JSON.parse(localStorage.getItem("employees"));
  }

  setData() {
    localStorage.setItem("employees", JSON.stringify(this.employees));
  }
}
