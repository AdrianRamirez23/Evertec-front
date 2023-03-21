import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUsuarioModelComponent } from './edit-usuario-model.component';

describe('EditUsuarioModelComponent', () => {
  let component: EditUsuarioModelComponent;
  let fixture: ComponentFixture<EditUsuarioModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUsuarioModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditUsuarioModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
