import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { CrisisListComponent } from '../crisis-list/crisis-list.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html'
})
export class HeroesListComponent {

  constructor(private router:Router) { }

  events(){
    this.router.events.subscribe((events)=>{
      console.log(events);
    })
  }

  routerState(){
    console.log(this.router.routerState);
  }

  navigated(){
    console.log(this.router.navigated);
  }
  
  config(){
    console.log(this.router.config);
  }

  url(){
    console.log(this.router.url);
  }

  initialNavigation(){
    this.router.initialNavigation();
  }
  
  setUpLocationChangeListener(){
    this.router.setUpLocationChangeListener();
  }

  resetConfig(){
    this.router.resetConfig([
      { path: 'crisis-list', component: CrisisListComponent },
      { path: 'heroes-list', component: HeroesListComponent },
      { path: '', redirectTo: '/heroes-list', pathMatch: 'full'},
      { path: '**', component: PageNotFoundComponent }
    ]);
  }

  createUrlTreeCrisis(){
    console.log(this.router.createUrlTree(['crisis-list']));
  }

  getCurrentNavigation(){
    console.log(this.router.getCurrentNavigation());
  }

  dispose(){
    console.log(this.router.dispose());
  }

  navigateByUrlToCrisis(){
    this.router.navigateByUrl('crisis-list');
  }

  navigateToCrisis(){
    this.router.navigate(['crisis-list']);
  }

  serializeUrlCrisis(){
    const urlTree = this.router.createUrlTree(['crisis-list']);
    console.log(this.router.serializeUrl(urlTree))
  }

  parseUrlCrisis(){
    console.log(this.router.parseUrl('crisis-list'))
  }

}
