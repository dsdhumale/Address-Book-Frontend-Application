import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressBook } from 'src/app/addressBook';
import { DataService } from 'src/app/service/data.service';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnInit {

  public personDetails: AddressBook[] = [];

  constructor(private httpService: HttpService, private router: Router, private dataService: DataService) { }
  
  ngOnInit(): void {
    this.httpService.getContactsData().subscribe(data => {
      this.personDetails = data.data;
      console.log(this.personDetails);
    });
  }

  remove(id: number): void {
    console.log(id);
    alert('Delete contact with id:' + id + '?')
    this.httpService.deleteContact(id).subscribe(response => {
      console.log(response);
      this.ngOnInit();
    });
  }

  update(person: AddressBook): void {
    alert('Update contact with id:' + person.id + '?')
    this.dataService.changePerson(person);
    this.router.navigateByUrl('/add-contact/' + person.id);
    this.httpService.updateContact(person.id, person).subscribe(response => {
      console.log(response);
      this.ngOnInit();
    });
  }
}
