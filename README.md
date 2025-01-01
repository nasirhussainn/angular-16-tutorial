# Angular 16 Tutorial

Welcome to the Angular 16 tutorial! This series will guide you through the core concepts and advanced features of Angular 16, from the basics of components to advanced topics like Angular forms, routing, and state management. This tutorial is organized into a series of lessons to help you master Angular 16 at your own pace.

## Table of Contents

### Lecture 1: Introduction to Angular 16
- Overview of Angular 16
- Setting up the Angular development environment
- Installing Node.js, npm, and Angular CLI

### Lecture 2: Your First Angular Application
- Creating a new Angular project
- Understanding the folder structure
- Running the Angular development server

### Lecture 3: Angular Components
- What is a component?
- Creating and using components
- Component lifecycle and bindings

### Lecture 4: Angular Directives
- Overview of directives in Angular
- Structural vs Attribute directives
- Using `*ngIf`, `*ngFor`, and `*ngSwitch`

# Lecture 5: Built-in and Custom Pipes  

## Built-in Pipes  
Commonly used built-in pipes in Angular:  

- **`uppercase` and `lowercase`:** Transform text to uppercase or lowercase.  
- **`currency`:** Format numbers as currency.  
- **`date`:** Format dates in various styles.  
- **`decimal` and `percent`:** Format numbers as decimals or percentages.  
- **`slice` and `json`:** Extract a portion of data or format objects as JSON.  

## Custom Pipes  
### Steps to Create a Custom Pipe  
1. Use the `@Pipe` decorator to define the pipe.  
2. Implement the `PipeTransform` interface to handle the transformation logic.  
3. Use the custom pipe in a template by referencing its name.  


### Lecture 6: Angular Services and Dependency Injection
- What are services in Angular?
- Creating services
- Using dependency injection to inject services into components

# Lecture 7: API Integration with HttpClient Module

## Overview:
In this lecture, we will learn how to integrate an API using Angular's `HttpClientModule`. We'll cover the following key concepts:

- **Understanding HttpClientModule**
- **Making GET and POST requests**
- **Handling API responses**
- **Using manual subscription with `next()`**
- **Error handling and data management**

## Steps Covered:
### 1. Setup `HttpClientModule`
To use Angular's HttpClient, you need to import the `HttpClientModule` in your application’s module.

#### **app.module.ts**

```typescript
import { HttpClientModule } from '@angular/common/http';  // Import HttpClientModule

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule],  // Add HttpClientModule to imports
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

### Lecture 6: Angular Modules
- What are Angular modules?
- How to create and use modules
- Lazy loading in Angular

### Lecture 7: Angular Forms
- Introduction to Angular forms
- Template-driven forms
- Reactive forms in Angular

### Lecture 8: Angular Routing
- What is Angular routing?
- Configuring routes and navigation
- Route guards and lazy loading routes

### Lecture 9: Observables and RxJS
- Introduction to Observables in Angular
- Using RxJS operators for async operations
- Handling HTTP requests with Angular's HttpClient

### Lecture 10: State Management with NgRx
- Introduction to state management in Angular
- What is NgRx?
- Setting up NgRx in Angular

### Lecture 11: Angular Pipes
- Introduction to Angular pipes
- Built-in pipes in Angular
- Creating custom pipes

### Lecture 12: Angular Services & HTTP Requests
- Handling HTTP requests using Angular services
- Using Angular's HttpClient to fetch data from a server
- Handling error responses and requests

### Lecture 13: Unit Testing in Angular
- Introduction to testing in Angular
- Unit tests for components, services, and directives
- Using Jasmine and Karma for Angular unit tests

### Lecture 14: Advanced Angular Topics
- Optimizing performance in Angular applications
- Change detection strategy and OnPush
- Ahead of Time (AOT) compilation

### Lecture 15: Deploying Angular Applications
- Building Angular applications for production
- Setting up deployment on platforms like Firebase, Netlify, or AWS
- Continuous integration and deployment in Angular

## How to Run the Project Locally

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/nasirhussainn/angular-16-tutorial.git
