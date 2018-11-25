import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeanceTemplateItemComponent } from './seance-template-item.component';

describe('SeanceTemplateItemComponent', () => {
  let component: SeanceTemplateItemComponent;
  let fixture: ComponentFixture<SeanceTemplateItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeanceTemplateItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeanceTemplateItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
