import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobItemsComponent } from './job-items.component';

describe('JobItemsComponent', () => {
  let component: JobItemsComponent;
  let fixture: ComponentFixture<JobItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobItemsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
