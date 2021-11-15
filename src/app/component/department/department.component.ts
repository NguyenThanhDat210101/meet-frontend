
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Department } from 'src/app/common/department';
import { DepartmentServiceService } from 'src/app/services/department-service.service';
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  departs!: Department[];
  getDepart :any = '';
  lengthPage!:any;
  page:number = 1;
  formDepart!:FormGroup;
  formEditDepart!:FormGroup;
  constructor(private departservice: DepartmentServiceService,private toastr: ToastrService) {

    this.formDepart = new FormGroup({
      'id': new FormControl(0),
      'name': new FormControl(null,[Validators.required, Validators.minLength(5)]),
      'status': new FormControl(true)
    });

    this.formEditDepart = new FormGroup({
      'name': new FormControl(null,[Validators.required, Validators.minLength(5)]),
      'status': new FormControl(true)
    });
  }

  ngOnInit(): void {
    this.getAllDepart();
  }

  getAllDepart(){
    this.departservice.getAll().subscribe(data => {
      this.departs = data as Department[];
      this.lengthPage = this.departs.length;
    })
  }

  insertDepartment(){
    this.departservice.insert(this.formDepart.value).subscribe(data=>{
      this.ngOnInit();
      this.toastr.success("Thêm Thành Công","Hệ Thống");
    },error =>{
      this.toastr.error("Lỗi Unique","Hệ Thống");
    })
  }

  deleteDepartment(id:number){
     this.departservice.delete(id).subscribe(data =>{
      this.toastr.success("Xóa Thành Công","Hệ Thống");
      this.ngOnInit();
    });
  }

  getID(id:number){
    this.departservice.show(id).subscribe(data=>{
      this.getDepart = data as Department;
    });
  }

  update(){
    this.departservice.update(this.getDepart.id,this.formEditDepart.value).subscribe(data=>{
      this.toastr.success("Cập Nhật Thành Công","Hệ Thống");
      this.ngOnInit();
    },error=>{
      this.toastr.error("Lỗi "+error.message ,"Hệ Thống");

    });
  }

}
