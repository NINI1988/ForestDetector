import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockImageAnnotatorService } from '../../mocks/mock-image-annotator.service';
import { HomeComponent } from './home.component';
import { ImageAnnotatorService } from '../image-annotator.service';

describe('HomeComponent', () =>
{
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () =>
  {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [
        { provide: ImageAnnotatorService, useClass: MockImageAnnotatorService }, // Use mock service
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () =>
  {
    expect(component).toBeTruthy();
  });
});
