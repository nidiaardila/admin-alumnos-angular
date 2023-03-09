import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/material.module';

import { EditComponent } from './edit.component';

// describe('EditComponent', () => {
//   let component: EditComponent;
//   let fixture: ComponentFixture<EditComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ EditComponent ],
//       imports: [
//         ReactiveFormsModule,
//         MaterialModule,
//         BrowserAnimationsModule,
//         RouterModule.forRoot([]),
//         CUSTOM_ELEMENTS_SCHEMA
        
//       ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(EditComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
