import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUsuarioModelComponent } from './create-usuario-model.component';

describe('CreateUsuarioModelComponent', () => {
  let component: CreateUsuarioModelComponent;
  let fixture: ComponentFixture<CreateUsuarioModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUsuarioModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateUsuarioModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
