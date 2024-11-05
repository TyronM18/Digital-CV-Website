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
  paymail: string = '';
  reason: string = '';
  message: string = '';
  feedbackMessage: string = ''; // For displaying success/error message
  feedbackMessageColor: string = ''; // 'success' or 'danger'
  isSubmitting: boolean = false; // For disabling the button during submission

  constructor() {
    emailjs.init('8O2AoLJ6d1FpvqReb');
  }

  sendEmail(form: any) {
    if (form.invalid) {
      this.feedbackMessage = 'Please fill in all fields';
      this.feedbackMessageColor = 'danger';
      return;
    }

    this.isSubmitting = true;
    this.feedbackMessage = ''; // Reset the feedback message

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
          form.resetForm(); // Reset the form after success
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
