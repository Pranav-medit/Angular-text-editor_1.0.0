import { Component } from '@angular/core';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'textEditor';
  check1= true;
  check2= false;
  panelOpenState = false;
  public Editor = ClassicEditor;
  foods = [
    {value: 'steak-0', viewValue: 'David Guetta'},
    {value: 'pizza-1', viewValue: 'Peter Parker'},
    {value: 'tacos-2', viewValue: 'Ramesh'}
  ];
  languages= [
    {value: 'lang-1', viewValue: 'English'},
    {value: 'lang-2', viewValue: 'Kannada'},
    {value: 'lang-3', viewValue: 'Hindi'}
  ];
  category2 = ['Angular'];
  category = ['Big Data'];
  
    // ClassicEditor.create( document.querySelector( '#editor' ), {
    //       cloudServices: {
    //           tokenUrl: 'https://example.com/cs-token-endpoint',
    //           uploadUrl: 'https://your-organization-id.cke-cs.com/easyimage/upload/'
    //       }
    //   } )
    //   .then(console.log("Then") )
    //   .catch(  console.log("Then"));
    
  // selectedValue: string;
  // selectedCar: string;

  // foods = [
  //   {value: 'steak-0', viewValue: 'Steak'},
  //   {value: 'pizza-1', viewValue: 'Pizza'},
  //   {value: 'tacos-2', viewValue: 'Tacos'}
  // ];

  // cars= [
  //   {value: 'volvo', viewValue: 'Volvo'},
  //   {value: 'saab', viewValue: 'Saab'},
  //   {value: 'mercedes', viewValue: 'Mercedes'}
  // ];
 
}
