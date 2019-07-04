import { async, TestBed } from '@angular/core/testing';
import { ElementsModule } from './elements.module';

describe('ElementsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ElementsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ElementsModule).toBeDefined();
  });
});
