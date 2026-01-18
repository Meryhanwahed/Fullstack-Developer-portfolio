import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling, withViewTransitions } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [


    // 2. إعدادات الـ Router
    provideRouter(
      routes,
      // تفعيل السكرول الناعم للأقسام (Anchor Scrolling)
      withInMemoryScrolling({
        scrollPositionRestoration: 'enabled',
        anchorScrolling: 'enabled'
      }),
      // ميزة اختيارية: بتعمل أنيميشن ناعم جداً بين الصفحات (View Transitions)
      withViewTransitions()
    ),

    // 3. تحسين الـ SEO وسرعة التحميل الابتدائية
    provideClientHydration()
  ]
};
