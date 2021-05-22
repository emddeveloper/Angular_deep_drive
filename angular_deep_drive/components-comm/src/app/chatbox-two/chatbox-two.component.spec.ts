import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatboxTwoComponent } from './chatbox-two.component';

describe('ChatboxTwoComponent', () => {
  let component: ChatboxTwoComponent;
  let fixture: ComponentFixture<ChatboxTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChatboxTwoComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatboxTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
