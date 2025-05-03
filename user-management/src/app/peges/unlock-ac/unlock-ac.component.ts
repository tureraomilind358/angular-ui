import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-unlock-ac',
  templateUrl: './unlock-ac.component.html',
  styleUrls: ['./unlock-ac.component.css']
})
export class UnlockAcComponent {
  passwordsDoNotMatch = false;
  onUnlockAccount(unlockFormData: NgForm) {
    const { newPwd, confirmPwd } = unlockFormData.value;

    if (newPwd !== confirmPwd) {
      this.passwordsDoNotMatch = true;
      return;
    }

    this.passwordsDoNotMatch = false;

    if (unlockFormData.valid) {
      // proceed with form submission
      console.log('Form Submitted', unlockFormData.value);
    }
  
}

}
