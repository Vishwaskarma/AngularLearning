import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingInAngular } from './routing-in-angular';

describe('RoutingInAngular', () => {
  let component: RoutingInAngular;
  let fixture: ComponentFixture<RoutingInAngular>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoutingInAngular],
    }).compileComponents();

    fixture = TestBed.createComponent(RoutingInAngular);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
