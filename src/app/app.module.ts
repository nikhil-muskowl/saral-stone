import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { OurWorksComponent } from './pages/our-works/our-works.component';
import { OurWorkDetailComponent } from './pages/our-work-detail/our-work-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { SliderComponent } from './component/slider/slider.component';
import { TestimonialComponent } from './component/testimonial/testimonial.component';
import { OurClientsComComponent } from './component/our-clients-com/our-clients-com.component';
import { SomeFactsComComponent } from './component/some-facts-com/some-facts-com.component';
import { LatestBlogsComComponent } from './component/latest-blogs-com/latest-blogs-com.component';
import { OurExpertsComComponent } from './component/our-experts-com/our-experts-com.component';
import { WhoWeAreComComponent } from './component/who-we-are-com/who-we-are-com.component';
import { LatestProjectsComComponent } from './component/latest-projects-com/latest-projects-com.component';
import { WelcomComComponent } from './component/welcom-com/welcom-com.component';
import { FooterComComponent } from './component/footer-com/footer-com.component';
import { HeaderComComponent } from './component/header-com/header-com.component';
import { TermsAndConditionsComponent } from './pages/terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from './pages/privacy-policy/privacy-policy.component';
import { CollectionsComponent } from './pages/collections/collections.component';
import { ProductsComponent } from './pages/products/products.component';
import { BlogsComponent } from './pages/blogs/blogs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    OurWorksComponent,
    OurWorkDetailComponent,
    SliderComponent,
    TestimonialComponent,
    OurClientsComComponent,
    SomeFactsComComponent,
    LatestBlogsComComponent,
    OurExpertsComComponent,
    WhoWeAreComComponent,
    LatestProjectsComComponent,
    WelcomComComponent,
    FooterComComponent,
    HeaderComComponent,
    TermsAndConditionsComponent,
    PrivacyPolicyComponent,
    CollectionsComponent,
    ProductsComponent,
    BlogsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
