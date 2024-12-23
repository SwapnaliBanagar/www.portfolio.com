import { Component } from '@angular/core';

@Component({
  selector: 'app-resume',
  standalone: false,
  
  template: `
    <div class="resume-container">
      <iframe
        src="assets/SwapnaliDhere-Resume.pdf"
        width="100%"
        height="600px"
        frameborder="0"
      ></iframe>
    </div>
  `,
  styles:  [
    `
      .resume-container {
        padding: 20px;
        text-align: center;
        background-color: #f0f0f0;
        height: 100vh;
      }
    `,
  ],
})
export class ResumeComponent {

}
