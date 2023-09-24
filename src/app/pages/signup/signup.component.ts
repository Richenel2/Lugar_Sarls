import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  constructor(private service: AuthServiceService, private router: Router) {}

  nom = '';
  mail = '';
  pass = '';
  submit() {
    var formData = {
      username: this.nom,
      email: this.mail,
      password: this.pass,
    };

    this.service.postSignup(formData).subscribe((res) => {
      console.log(res);
      res.status == 'OK'
        ? this.router.navigate(['/'])
        : this.router.navigate(['/signup']);
    }, error => {
       alert('Username or email already taken');
    });
  }
}
