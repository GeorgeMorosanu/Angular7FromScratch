import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  
  allowNewServer = false;
  serverCreationStatus="No server was created!";
  serverName='TestServer';
  serverCreated=false;
  
  servers = ['TestServer', 'TestServer 2'];
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer=true;
    } ,500);

  }


  dispaly=true;
  ClickLog=[];
  index=1;

  toggleParagraph(){
    if(this.dispaly==true){
      this.dispaly=false;
    }
    else{
      this.dispaly=true;
    }
    this.ClickLog.push(this.index++);
    console.log(this.ClickLog);
  }
  getColor(logNo: any){
    console.log(logNo)
    if(this.ClickLog.indexOf(logNo)>=4){
      return "blue";
    }
    else{
      return "none";
    }
  }
  getPositionOfLog(logNo: any){
    return this.ClickLog.indexOf(logNo);
  }



  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus="Server was created! Name is "+this.serverName;
    this.serverCreated=true;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event:any){
    this.serverName=(<HTMLInputElement>event.target).value;

  }

}
