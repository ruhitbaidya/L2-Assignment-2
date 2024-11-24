# Bicycle Store API

A robust Express.js application built with TypeScript and integrated with MongoDB using Mongoose to manage a Bicycle Store. This application supports managing bicycles, processing orders, and tracking revenue with comprehensive error handling.

---

## Features

- **Bicycle Management**:

  - Create, read, update, and delete bicycle records.
  - Filter bicycles by name, brand, or type.

  - CRUD URL
    Get All Product-

  ```bash
   get - http://localhost:5000/api/products

  ```

  Create Product-

  ```bash
  post- http://localhost:5000/api/products

  ```

  Get Singal Product -

  ```bash
  get - http://localhost:5000/api/products/:(Id Give Here)

  ```

  Update Product -

  ```bash
  put - http://localhost:5000/api/products

  ```

  Delete Product -

  ```bash
  delete - http://localhost:5000/api/products

  ```

- **Order Management**:

  - Place orders for bicycles.
  - Automatically adjust inventory based on order quantity.
  - Mark bicycles as out of stock when inventory is depleted.

- **Revenue Calculation**:

  - Calculate total revenue from all orders using MongoDB aggregation.

- **Error Handling**:

  - Standardized error responses with detailed error messages and stack traces.

- **Built with TypeScript**:
  - Strongly typed codebase for better maintainability and error reduction.

---

## Getting Started

Follow these instructions to set up the project on your local machine.

### Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or cloud-based instance)
- A package manager like `npm`

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/ruhitbaidya/L2-Assignment-2.git

   ```
