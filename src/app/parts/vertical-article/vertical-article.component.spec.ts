import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalArticleComponent } from './vertical-article.component';

describe('VerticalArticleComponent', () => {
  let component: VerticalArticleComponent;
  let fixture: ComponentFixture<VerticalArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
