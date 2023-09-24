import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  constructor(private service: AuthServiceService, private router: Router) {}
  
  name = '';
  pass = '';
  link!: string;

  submit() {
    var formData = {
      username: this.name,
      password: this.pass,
    };
    console.log(formData);
    this.service.postLogin(formData).subscribe(
      (response) => response.status == 'OK' ? this.router.navigate(['/']) : (this.router.navigate(['signin']),alert('Something is wrong')) 
    );
  }
}
