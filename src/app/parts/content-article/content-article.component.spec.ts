import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentArticleComponent } from './content-article.component';

describe('ContentArticleComponent', () => {
  let component: ContentArticleComponent;
  let fixture: ComponentFixture<ContentArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
