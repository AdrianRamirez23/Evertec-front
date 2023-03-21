import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteUsuarioModelComponent } from './delete-usuario-model.component';

describe('DeleteUsuarioModelComponent', () => {
  let component: DeleteUsuarioModelComponent;
  let fixture: ComponentFixture<DeleteUsuarioModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteUsuarioModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteUsuarioModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
