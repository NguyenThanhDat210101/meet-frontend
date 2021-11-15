export  class Meetroom{
  'id':number;
  'name':string;
  'address' :string;
  'seats' :number;
  'image' :string;
  constructor(name: string, id :number,address:string,seats:number,image:string){
    this.name = name;
    this.id = id;
    this.address = address;
    this.seats = seats;
    this.image = image;
  }
}
