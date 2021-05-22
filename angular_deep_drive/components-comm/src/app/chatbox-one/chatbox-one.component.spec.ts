import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatboxOneComponent } from './chatbox-one.component';

describe('ChatboxOneComponent', () => {
  let component: ChatboxOneComponent;
  let fixture: ComponentFixture<ChatboxOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatboxOneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatboxOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
