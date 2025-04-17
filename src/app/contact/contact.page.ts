import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonLabel,
  IonButton,
  IonItem,
  IonRow,
  IonCol,
  IonIcon,
  IonToast,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonSpinner,
} from '@ionic/angular/standalone';
import emailjs from 'emailjs-com';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    CommonModule,
    FormsModule,
    IonLabel,
    IonButton,
    IonItem,
    IonRow,
    IonCol,
    IonIcon,
    IonToast,
    IonSelect,
    IonSelectOption,
    IonTextarea,
    IonSpinner,
  ],
})
export class ContactPage implements OnInit {
  name: string = '';
  email: string = '';
  reason: string = '';
  message: string = '';
  feedbackMessage: string = '';
  feedbackMessageColor: string = '';
  isSubmitting: boolean = false;

  constructor() {
    emailjs.init(environment.EMAILJS_USER_ID);
  }
  sendEmail(form: any) {
    let errors: string[] = [];
  
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(form.value.email)) {
      errors.push('Please enter a valid email address.');
    }
  

    if (!form.value.name || !form.value.email || !form.value.message) {
      errors.push('Please fill in all required fields.');
    }

    if (errors.length > 0) {
      this.feedbackMessage = errors.join(' ');
      this.feedbackMessageColor = 'danger';
      return;
    }
  
    this.isSubmitting = true;
    this.feedbackMessage = '';
  
    const templateParams = {
      name: form.value.name,
      email: form.value.email,
      message: form.value.message,
    };
  
    emailjs
      .send('service_1s9xl9g', 'template_qdzbere', templateParams)
      .then(
        (response) => {
          this.feedbackMessage =
            'Thank you for contacting us! Your email has been sent successfully.';
          this.feedbackMessageColor = 'success';
          form.resetForm();
          console.log(
            'Email sent successfully!',
            response.status,
            response.text
          );
        },
        (error) => {
          this.feedbackMessage =
            'Oops! There was an issue sending your email. Please try again later.';
          this.feedbackMessageColor = 'danger';
          console.error('Error sending email', error);
        }
      )
      .finally(() => {
        this.isSubmitting = false;
      });
  }

  ngOnInit() {
    test: String;
  }
}
