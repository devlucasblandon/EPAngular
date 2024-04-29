/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { faker } from '@faker-js/faker';
import { CafeService } from '../cafe.service';
import { Cafe } from '../cafe';
import { CafeListComponent } from './cafe-list.component';
import { HttpClientModule } from '@angular/common/http';

describe('CafeListComponent', () => {
  let component: CafeListComponent;
  let fixture: ComponentFixture<CafeListComponent>;
  let debug: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ CafeListComponent ],
      providers: [ CafeService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeListComponent);
    component = fixture.componentInstance;

    for(let i = 0; i < 3; i++) {
      const cafe = new Cafe( 
              faker.number.int(),
              faker.lorem.sentence(),
              faker.lorem.sentence(),
              faker.lorem.sentence(), 
              faker.lorem.sentence(), 
              faker.number.int(),
              faker.lorem.sentence(), 
      );

     component.cafes.push(cafe);

    }
    fixture.detectChanges();
    debug = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("Component has a table", () => {
    expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThan(0);
  });

  it('should render table headers', () => {
    const headerElements = fixture.nativeElement.querySelectorAll('thead th');
    expect(headerElements.length).toBe(4); // Expect 4 headers (including '#')
  });

  it('should render table data', () => {
    const dataElements = fixture.nativeElement.querySelectorAll('tbody tr');
    expect(dataElements.length).toBe(3); // Expect 3 rows of data
  });
});
