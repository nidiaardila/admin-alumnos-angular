import { TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AbmComponent } from './components/dashboard/abm/abm.component';
import { AlumnosComponent } from './components/dashboard/alumnos/alumnos.component';
import { CursosComponent } from './components/dashboard/cursos/cursos.component';
import { DashboardRoutingModule } from './components/dashboard/dashboard-routing.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { EditComponent } from './components/dashboard/edit/edit.component';
import { NavbarComponent } from './components/dashboard/navbar/navbar.component';
import { ToolbarComponent } from './components/dashboard/toolbar/toolbar.component';
import { LoginComponent } from './components/login/login/login.component';
import { MaterialModule } from './material.module';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        MaterialModule,
        BrowserAnimationsModule,
        DashboardModule,
        DashboardRoutingModule,
        
      ],
      declarations: [
        AppComponent,
        AlumnosComponent,
        NavbarComponent,
        ToolbarComponent,
        EditComponent,
        DashboardComponent,
        LoginComponent,
        AbmComponent,
        CursosComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Admin-Alumnos-Angular'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('Admin-Alumnos-Angular');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('Admin-Alumnos-Angular app is running!');
  });
});
