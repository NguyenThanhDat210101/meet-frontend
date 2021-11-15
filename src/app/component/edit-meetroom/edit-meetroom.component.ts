import { Component, EventEmitter, Input, OnInit, Output, TemplateRef } from '@angular/core';
import { Meetroom } from './../../common/meetroom';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { MeetroomService } from './../../services/meetroom.service';
import { UploadImageService } from './../../services/upload-image.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-edit-meetroom',
  templateUrl: './edit-meetroom.component.html',
  styleUrls: ['./edit-meetroom.component.css']
})
export class EditMeetroomComponent implements OnInit {
  @Input() id!: number;
  @Output()
  editFinish: EventEmitter<any> = new EventEmitter<any>();

  meetroom!:Meetroom;
  selectFile!: File;
  imageUpdate!: string;
  formEditMeetroom : FormGroup;

  constructor(private modalService: NgbModal,private toastr: ToastrService, private meetService: MeetroomService,private uploadService: UploadImageService) {
    this.formEditMeetroom = new FormGroup({
      'id': new FormControl(0),
      'name': new FormControl(null,[Validators.required,Validators.minLength(6)]),
      'seats': new FormControl(null,[Validators.required, Validators.min(10)]),
      'address': new FormControl(null,[Validators.required,Validators.minLength(10)]),
    });
  }

  ngOnInit(): void {
    this.getMeetById();
  }
  getMeetById(){
    this.meetService.show(this.id).subscribe(data=>{
      this.meetroom = data as Meetroom;

      this.formEditMeetroom = new FormGroup({
        'id': new FormControl(this.meetroom.id),
        'name': new FormControl(this.meetroom.name,[Validators.required,Validators.minLength(6)]),
        'seats': new FormControl(this.meetroom.seats,[Validators.required, Validators.min(10)]),
        'address': new FormControl(this.meetroom.address,[Validators.required,Validators.minLength(10)]),
      });

      this.imageUpdate = this.meetroom.image;
    });
  }

  update(){
    this.meetroom = this.formEditMeetroom.value;
    this.meetroom.image = this.imageUpdate;
    this.meetService.update(this.id,this.meetroom).subscribe(response=>{
      this.toastr.success('Update Thành Công','Hệ Thống');
      this.close();
      this.editFinish.emit();
    });
  }

  onFileSelectUpdate(event: any) {
    this.selectFile = event.target.files[0];
    this.uploadService.uploadFile(this.selectFile).subscribe(response => {
      if (response) {
        this.imageUpdate = response.secure_url;
      }
    });
  }

  open(content: TemplateRef<any>) {
    this.modalService.open(content, { centered: true });
  }

  close() {
    this.modalService.dismissAll();
  }
}
