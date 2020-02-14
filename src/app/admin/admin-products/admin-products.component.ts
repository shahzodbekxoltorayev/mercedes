import { Component, OnInit, ViewChild } from '@angular/core';

import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator, MatSort } from '@angular/material';
import { ProductService } from 'src/app/shared/service/productsService';

import Swal from 'sweetalert2';


@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {

  displayedColumns: string[] = ['id', 'image', 'name', 'category', 'quantity', 'brand', 'model', 'price', 'sale', 'date', 'edit', 'delete'];
  dataSource;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(
    private productService: ProductService
  ) {
    this.get()
   }

   get() {
      this.productService.getAll().subscribe( res => {
        console.log(res.json());
        this.dataSource = new MatTableDataSource(res.json());
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      } );
   }

  ngOnInit() {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  delete(id) {
    this.productService.delete(id).subscribe( res => {
      var obj = res.json();
      if( obj.message ) {
        Swal.fire(
          'Good job!',
          'You clicked the button!',
          'success'
        )
        }
        else {
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Maxsulot o`chirilmadi ',
            timer: 3000
          })
        }
      this.get();
    });
  }

}
