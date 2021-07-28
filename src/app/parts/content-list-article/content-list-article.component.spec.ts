import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentListArticleComponent } from './content-list-article.component';

describe('ContentListArticleComponent', () => {
  let component: ContentListArticleComponent;
  let fixture: ComponentFixture<ContentListArticleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentListArticleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentListArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
