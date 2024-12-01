import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { CaseRecord } from '../case-record'; 

@Component({
  selector: 'app-mvact',
  templateUrl: './mvact.component.html',
  styleUrl: './mvact.component.css'
})
export class MvactComponent {

  
  selectedstation?: string;
  cards: any[] = [];  // Array to hold the cards
  loading: boolean = true;  // To show loading state while fetching data
  error: string | null = null;  // To display any error message
  mydata : any;
  filteredRecords : any;
  

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getdata().subscribe(
      res => {
        // console.log(res);  // Print the JSON data in the console
        this.mydata = res;
        this.filteredRecords = [...this.mydata];
        console.log(this.filteredRecords);
        // console.log(this.mydata[1]);
        // console.log(this.mydata[1]["CMP NO"]);
      }
    )
  }

  
  onSelect(event : Event){
    this.selectedstation = (event.target as HTMLSelectElement).value;
    // console.log(this.selectedstation);
    this.filteredRecords = this.mydata.filter((record: CaseRecord) => record["Police Station"] === "Guntur West Traffic");
    console.log(this.filteredRecords);
  }
  
  longText = `Crime details and hearing of case template to be created`;
  
  stations = [{id:1,name:"Guntur"},
    {id:2,name:"Mangalagiri"},
    {id:3,name:"Tenali"},
    {id:4,name:"Bapatla"},
    {id:5,name:"Sattenapalli"},
    {id:6,name:"Narasaraopet"}]

    tabs: any = [
      {
        id: 1,
        label: 'Home',
      },
      {
        id: 2,
        label: 'About',
      },
      {
        id: 3,
        label: 'Contact',
      },
    ];
    selectedTab: number = 1;
  
    selectTab(tabid: number) {
      // console.log(tabid);
      this.selectedTab = tabid;
    }
    

}
