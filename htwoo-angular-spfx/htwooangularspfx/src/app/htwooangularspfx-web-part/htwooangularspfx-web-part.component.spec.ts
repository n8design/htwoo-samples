import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HtwooangularspfxWebPartComponent } from './htwooangularspfx-web-part.component';

describe('HtwooangularspfxWebPartComponent', () => {
  let component: HtwooangularspfxWebPartComponent;
  let fixture: ComponentFixture<HtwooangularspfxWebPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HtwooangularspfxWebPartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HtwooangularspfxWebPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
