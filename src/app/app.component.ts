import {Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import {MatTableDataSource} from '@angular/material/table';
import {SelectionModel} from '@angular/cdk/collections';

export interface ProductElement {
  id: number;
  name: string;
  category: string;
}

const ELEMENT_DATA: ProductElement[] = [
  { id: 1, name: 'Sandwich', category: 'Food' },
  { id: 2, name: 'Nachos', category: 'Food' },
  { id: 3, name: 'Burger', category: 'Food' },
  { id: 4, name: 'Fries', category: 'Food' },
  { id: 5, name: 'Noodles', category: 'Food' },
  { id: 6, name: 'Soft Drink', category: 'Drinks' },
  { id: 7, name: 'Lemonade', category: 'Drinks' },
  { id: 8, name: 'Mojito', category: 'Drinks' },
  { id: 9, name: 'Ice Tea', category: 'Drinks' },
  { id: 10, name: 'Juice', category: 'Drinks' }
];


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'product';
  displayedColumns: string[] = ['select', 'id', 'name', 'category'];
  dataSource = new MatTableDataSource<ProductElement>(ELEMENT_DATA);
  selection = new SelectionModel<ProductElement>(true, []);
  cartLength: number;
  myForm: FormGroup;
  backCart = false;
  addCart  = true;

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: ProductElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id + 1}`;
  }

  // Function to view cart page with the selected items.
  showCart() {
    this.addCart = false;
    this.backCart = true;
    this.displayedColumns = ['id', 'name', 'category'];
    this.dataSource = new MatTableDataSource<ProductElement>(this.selection.selected);
  }

  // Function to go back to the listing/main page of the application.
  backToCart() {
    this.addCart = true;
    this.backCart = false;
    this.selection.clear();
    this.cartLength = null;
    this.myForm.controls.name.setValue('');
    this.myForm.controls.category.setValue('');
    this.displayedColumns = ['select', 'id', 'name', 'category'];
    this.dataSource = new MatTableDataSource<ProductElement>(ELEMENT_DATA);
  }

  // Function to add selected items into the cart.
  addToCart(): void {
    if (this.selection.selected.length > 0 ) {
      this.cartLength = this.selection.selected.length;
    }
  }

  ngOnInit() {
    this.myForm = new FormGroup({
      name: new FormControl('', Validators.required),
      category: new FormControl('', Validators.required)
    });
  }

  // Function to add new items into the cart along with the different categories.
  onSubmit(form: FormGroup) {
    ELEMENT_DATA.push({id: ELEMENT_DATA.length + 1,  name: form.value.name, category: form.value.category});
    this.dataSource = new MatTableDataSource<ProductElement>(ELEMENT_DATA);
  }
}
