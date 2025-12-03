---
title: "Getting Started with GegoK12 – Quick Setup Guide"
description: "Follow this step-by-step guide to install, configure, and launch your GegoK12 School ERP system for smooth school operations."
og:title: "Getting Started with GegoK12 – Quick Setup Guide"
og:description: "Follow this step-by-step guide to install, configure, and launch your GegoK12 School ERP system for smooth school operations."
---
# Getting Started with gegok12.com

Welcome to the **gegok12.com** platform. This document will help you set up the project on your local machine for development and testing purposes.

---

##  Prerequisites

Ensure you have the following installed on your system:

- PHP 8.1+
- Composer
- Node.js (v14)
- npm or yarn
- MySQL
- Git
- Laragon or "XAMPP" or similar PHP Dev Platform
- Redis (Optional)

---

##  Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/Gego-K12/gegok12
cd gegok12
```

### 2. Install PHP Dependencies

```bash
composer install
```

### 3. Copy `.env` and Set Configurations

```bash
cp .env.example .env
php artisan key:generate
```

Update the `.env` file with your database, mail, queue, and other local configurations.

### 4. Run Database Migrations and Seeders

```bash
php artisan migrate --seed
```

> Optional: You can create a dummy superadmin using the seeder or manually using Tinker.

### 5. Install Node Dependencies

```bash
npm install
npm run dev
```

OR if you use Yarn:

```bash
yarn
yarn dev
```

### 6. Start the Development Server

```bash
php artisan serve
```

The application will be available at:  
[http://localhost:8000](http://localhost:8000)

---

##  Admin Credentials (Default)

```
Email: demoschool@gegok12.com
Password: password
```

> You can change this in the database or update the seeder file.


##  Useful Commands

| Task | Command |
|------|---------|
| Cache clear | `php artisan optimize:clear` |
| Route list | `php artisan route:list` |
| Storage link | `php artisan storage:link` |
| Install npm dependencies | `npm install` |
| Compile assets | `npm run dev` or `npm run build` |

---

##  Support

For questions, issues or help, reach out to:

 support@gegok12.com  
 [https://gegok12.com](https://gegok12.com)
