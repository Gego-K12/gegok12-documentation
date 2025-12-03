---
title: "GegoK12 Mobile App – School Management on the Go"
description: "Access attendance, homework, results, and communication on the GegoK12 mobile app for teachers, parents, and students."
og:title: "GegoK12 Mobile App – School Management on the Go"
og:description: "Access attendance, homework, results, and communication on the GegoK12 mobile app for teachers, parents, and students."
---
# How to Access & Use Mobile Apps

GegoK12 provides dedicated Android apps and API endpoints for different user roles including **Parents**, **Teachers**, **Transport Drivers**, and **Coordinators**. Each app is tailored to the user’s functionality with secure authentication and role-based access.

---

##  Android App Access

###  Parent App

- **Download** from Play Store or via school-provided link  
- **Login Credentials**: Mobile number or email (provided by school)  
- **Key Features**:
  - View homework,assignements, attendance, and grades
  - Receive notifications and announcements
  - Fee payment & transaction history
  - Chat with teachers 

---

###  Teacher App

- **Download** from Play Store or install via APK  
- **Login Credentials**: Email   
- **Key Features**:
  - Mark attendance
  - Create assignments and assessments
  - View class schedule and student performance
  - Communication tools with students/parents

---

###  Transport (Driver) App

- **Login Credentials**: Email or mobile number  
- **Key Features**:
  - Daily route and stop information
  - Mark pickup/drop attendance
  - View assigned students per trip
  - GPS location sync (if enabled)

---

###  Coordinator App

- **Login Credentials**: Coordinator email  
- **Key Features**:
  - Route assignments and vehicle tracking
  - Student and driver coordination
  - View live trip status
  - Send alerts or reschedule stops

---

##  API Authentication

Each app communicates with GegoK12 backend using **secure token-based authentication**.

###  API Flow

1. **Login Endpoint**
  
2. **Token Received**
   - Store in `Authorization: Bearer <token>`

3. **Subsequent Requests**
   - Attach the token to access protected routes

---

##  Support

If you purchased the module and are facing issues, contact:

support@gegok12.com  

> Need help integrating your school’s app version? Contact our onboarding team to enable branding, custom menus, and theme updates.
