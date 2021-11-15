export  class Department{
    'id':number;
    'name':string;
    'status':boolean;
    constructor(name: string,status: boolean, id :number){
      this.name = name;
      this.status = status;
      this.id = id;
    }
}
