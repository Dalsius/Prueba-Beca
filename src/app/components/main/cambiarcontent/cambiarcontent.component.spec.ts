import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarcontentComponent } from './cambiarcontent.component';

describe('CambiarcontentComponent', () => {
  let component: CambiarcontentComponent;
  let fixture: ComponentFixture<CambiarcontentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambiarcontentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiarcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
