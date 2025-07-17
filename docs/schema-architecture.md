# Architecture Design – Smart Clinic Management System

## 1. Architecture Summary

The Smart Clinic Management System follows a three-tier architecture consisting of Presentation, Application, and Data layers. 
The frontend uses Thymeleaf templates to render HTML pages and also supports RESTful APIs for JSON data exchange. 
The backend is developed with Spring Boot. 
Relational data is managed using MySQL through JPA, while document-based data is handled with MongoDB using Spring Data. 
This architecture supports both interactive dashboards for web users and API integrations for external systems.

## 2. Numbered Flow

1. A user sends a request from the web browser (e.g. to view appointment lists).
2. The request reaches a Controller in the Spring Boot application.
3. The Controller:
    - Returns a Thymeleaf HTML page for web views, or
    - Responds with JSON for API requests.
4. The Controller calls Service classes to handle business logic.
5. Service classes interact with Repository classes for data access.
6. Relational data (e.g. user information) is stored in MySQL using JPA.
7. Document-based data (e.g. patient history) is stored in MongoDB using Spring Data.
8. Data flows back from repositories to services and controllers.
9. The frontend renders the HTML page or processes the JSON response for the user.