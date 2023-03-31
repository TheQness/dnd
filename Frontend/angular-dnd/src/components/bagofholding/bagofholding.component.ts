import { Component } from '@angular/core';

@Component({
  selector: 'app-bagofholding',
  templateUrl: './bagofholding.component.html',
  styleUrls: ['./bagofholding.component.css']
})
export class BagofholdingComponent {

  showTable: boolean = false;

  toggleShowTable(): void {
    this.showTable = !this.showTable;
  }

}
