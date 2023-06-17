import { Component } from '@angular/core';

@Component({
  selector: 'app-mayabazar',
  templateUrl: './mayabazar.component.html',
  styleUrls: ['./mayabazar.component.scss']
})
export class MayabazarComponent {
  // fontSize = 20;
  // fontColor = 'red';
  // name = 'babu';
  // isRed = true;
  // isBig = false;
  // data:string = '';
  signalColor: string = 'stop';
  employee: any;
  employees: any[] = [];
  constructor() {
    this.changeSignalColor();
    
    const employees = ["babu", "abbu", "aashi", "ajay"];
    console.log(employees.push("fysal"));
    console.log(employees);
    console.log(employees.pop());
    console.log(employees);

    const emp = [{"name" : "babu", "age" : 24}];
    const newEmp = {"name" : "fysal", "age" : 25};
    emp.push(newEmp);
    console.log(emp);
    
    const data = { a: "aashika", b: "babu" };
    for (const [key, value] of Object.entries(data)) {
      console.log(`${key}-${value}`);
    }

    const json = JSON.stringify({"name":"babu", "age":24, "city":"tirunelveli"});
    console.log(json);
    console.log(JSON.parse(json));

  }
  changeSignalColor() {
    setTimeout(() => {
      switch (this.signalColor) {
        case 'stop':
          this.signalColor = 'ready';
          break;
        case 'ready':
          this.signalColor = 'go';
          break;
        case 'go':
          this.signalColor = 'stop';
          break;
      }
      this.changeSignalColor();
    }, 3000);


  }





}

