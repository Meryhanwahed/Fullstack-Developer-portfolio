import { Component } from '@angular/core';
import { Hero } from './hero/hero';
import { Skills } from './skills/skills';
import { Projects } from './projects/projects';
import { Testimonials } from './testimonials/testimonials';
import { Contact } from './contact/contact';
import { About } from './about/about';
@Component({
  selector: 'app-landing',
  imports: [Hero,Skills,Projects,Testimonials,Contact,About],
  templateUrl: './landing.html',
  styleUrl: './landing.css',
})
export class Landing {

}
