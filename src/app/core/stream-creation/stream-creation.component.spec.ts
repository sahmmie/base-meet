import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StreamCreationComponent } from './stream-creation.component';

describe('StreamCreationComponent', () => {
  let component: StreamCreationComponent;
  let fixture: ComponentFixture<StreamCreationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StreamCreationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StreamCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
