import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MeetroomService } from 'src/app/services/meetroom.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Meetroom } from 'src/app/common/meetroom';
import { UploadImageService } from 'src/app/services/upload-image.service';

@Component({
  selector: 'app-meetroom',
  templateUrl: './meetroom.component.html',
  styleUrls: ['./meetroom.component.css']
})
export class MeetroomComponent implements OnInit {
  meetrooms !: Meetroom[];
  page:number = 1;
  lengthPage!:any;

  meetroom : any = '';
  formMeetroom !: FormGroup;

  selectFile!: File;
  url: string = 'https://res.cloudinary.com/veggie-shop/image/upload/v1633434089/products/jq4drid7ttqsxwd15xn9.jpg';
  image: string = this.url;
  imageUpdate!: string;

  constructor(private toastr: ToastrService, private meetService: MeetroomService,private uploadService: UploadImageService) {
    this.FormAddMeet();
  }
  FormAddMeet(){
    this.formMeetroom = new FormGroup({
      'id' : new FormControl(0),
      'name': new FormControl(null,[Validators.required,Validators.minLength(6)]),
      'seats': new FormControl(null,[Validators.required, Validators.min(10)]),
      'address': new FormControl(null,[Validators.required,Validators.minLength(10)]),
    });
  }
  ngOnInit(): void {
    this.image = this.url;
    this.FormAddMeet();
    this.getMeetroom();
  }

  getMeetroom(){
    this.meetService.getAll().subscribe(data=>{
      this.meetrooms = data as Meetroom[];
    })
  }

  insert(){
    this.meetroom = this.formMeetroom.value;
    this.meetroom.image = this.image;

    this.meetService.insert(this.meetroom).subscribe(data=>{
      this.ngOnInit();
      this.toastr.success('Thêm Meet Room Thành Công','Hệ Thống');

    },error=>{
      this.toastr.error('Lỗi truy xuất dữ liệu, bấm f5!', 'Hệ thống');
    });
  }



  getID(id:number){
    return id;

  }

  delete(id:number){
    this.meetService.delete(id).subscribe(response =>{
      this.ngOnInit();
      this.toastr.success('Bạn đã xóa thành công: ','Hệ Thống');

    });
  }
  onFileSelect(event: any) {
    this.selectFile = event.target.files[0];
    this.uploadService.uploadFile(this.selectFile).subscribe(response => {
      if (response) {
        this.image = response.secure_url;
      }
    })
  }

  finish(){
    this.ngOnInit();
  }


}
