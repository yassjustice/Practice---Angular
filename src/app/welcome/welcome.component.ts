// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-welcome',
//   standalone: true,
//   imports: [],
//   templateUrl: './welcome.component.html',
//   styleUrl: './welcome.component.css'
// })
// export class WelcomeComponent {
//   userName = ["A","B","C","D","E","F","G","H","I","J"];
//   index: number = 0;
//   constructor() {
//     this.myMethod(); // Call the method when the component is instantiated
//   }
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  userName = ['Hellooo!', 'we are going ', 'to be learning ', 'Angular', 'to use it ', 'on the new ', 'projects', 'in this internship', 'thank you', 'for your attention', "Hellooo! We are going to be learning Angular to use it on the new projects in this internship. Thank you for your attention."];
  index: number = 0;
  currentUser!: string;

  ngOnInit() {
    this.myMethod(); // Call the method when the component is initialized
  }

  myMethod() {
    this.displayUser();
  }

  displayUser() {
    if (this.index < 11) {
      console.log('index', this.index);
      console.log('user', this.userName[this.index]);

      // Update the current user
      this.currentUser = this.userName[this.index];

      // Update the index and display the next user after a delay
      this.index++;
      setTimeout(() => {
        this.displayUser();
      }, 1000); // Adjust the delay (in milliseconds) as needed
    }
  }
}
