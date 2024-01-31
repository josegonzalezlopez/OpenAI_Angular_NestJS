import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

export interface iPromptMessageFile {
  prompt?: string | null;
  file: File;
}

@Component({
  selector: 'app-text-message-box-file',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './textMessageBoxFile.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TextMessageBoxFileComponent { 

  @Input() placeholder: string = '';
  @Input() disableCorrections: boolean = false;
  @Output() onMessage = new EventEmitter<iPromptMessageFile>();

  public fb = inject(FormBuilder);
  public form = this.fb.group({
    prompt:[],
    file:[null, Validators.required]
  });

  handleSeletedFile(event: any): void{
    const file = event.target.files[0];
    this.form.controls.file.setValue(file);
  }

  handleSubmit(): void{
    if(this.form.invalid) return;

    const { prompt, file } = this.form.value;

    this.onMessage.emit({prompt, file: file!});
    this.form.reset();
    
  }
}
