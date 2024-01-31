import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ChatMessageComponent } from '@components/chat-bubbles/chatMessage/chatMessage.component';
import { MyMessageComponent } from '@components/chat-bubbles/myMessage/myMessage.component';
import { TextMessageBoxComponent } from '@components/text-boxes/textMessageBox/textMessageBox.component';
import { TextMessageBoxFileComponent, iPromptMessageFile } from '@components/text-boxes/textMessageBoxFile/textMessageBoxFile.component';
import { TypingLoaderComponent } from '@components/typingLoader/typingLoader.component';

@Component({
  selector: 'app-orthography-page',
  standalone: true,
  imports: [
    CommonModule,
    ChatMessageComponent,
    MyMessageComponent,
    TypingLoaderComponent,
    TextMessageBoxComponent,
    TextMessageBoxFileComponent,
  ],
  templateUrl: './orthographyPage.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrthographyPageComponent {

  handleMessage(prompt: string): void{
    console.log({prompt});
    
  }
  handleMessageFile({prompt, file}: iPromptMessageFile): void{
    console.log({prompt, file});
    
  }
 }
