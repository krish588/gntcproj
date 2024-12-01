import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvactComponent } from './mvact.component';

describe('MvactComponent', () => {
  let component: MvactComponent;
  let fixture: ComponentFixture<MvactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MvactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MvactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
