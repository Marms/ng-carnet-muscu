import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeanceTemplateListComponent } from './seance-template-list.component';

describe('SeanceTemplateListComponent', () => {
  let component: SeanceTemplateListComponent;
  let fixture: ComponentFixture<SeanceTemplateListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeanceTemplateListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeanceTemplateListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
