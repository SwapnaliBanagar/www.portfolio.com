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
  styles: [
    `
      .resume-container {
        padding: 20px;
        text-align: center;
        background-color: #f0f0f0;
        height: 100vh;
        width:100%
      }

       @media only screen and (min-device-width: 0px) and (max-width: 320px) {
    .resume-container{
      height: 200vh;
      width:87%; ;
          }
  }
           @media only screen and (min-device-width: 321px) and (max-width: 376px) {
    .resume-container{
      height: 200vh;
      width:87%; ;
          }
  }
           @media only screen and (min-device-width: 377px) and (max-width: 426px) {
    .resume-container{
      height: 200vh;
      width:87%; ;
          }
  }
          @media only screen and (min-device-width: 427px) and (max-width: 769px) {
    .resume-container{
      height: 200vh;
      width:94.6%; ;
          }
  }

    `,
  ],
})
export class ResumeComponent {

}
