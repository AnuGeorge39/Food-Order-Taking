 Food-Order-Taking Web Application
A modern web application built with the MERN stack (MongoDB, Express.js, React, Node.js).
This system is designed to modernize the food ordering experience in restaurants by reducing manual errors and centralizing operations like order-taking, menu editing, and table management. It ensures real-time updates and authentication with role-based access.

Features:
-Role-based login for Admin and Staff
-Real-time menu and order updates
-Admin panel for staff and menu management
-Staff interface for placing orders and viewing assigned tables
-Order summary with quantity and price

User Roles:

-Admin

. Admins have full access to the system:
. Manage staff accounts and access codes
. Create, read, update, delete (CRUD) menu items
. Configure table arrangements
. Monitor current and past orders
. Access secure login modal with validation

-Staff

Staff members have limited access:

. Place orders for assigned tables
. Add temporary menu items during service
. View pending and completed orders
. Restricted from accessing or modifying admin-level data

UX Design

-Home Page : Includes a banner and a carousel of popular dishes
-About Page : Restaurant details and testimonials
-Footer : Quick links and contact information
-Navigation Bar : Includes links for Home, Staff, and Admin login
-Modals : Popup login forms with validation feedback

System Workflows

-Admin Workflow

1. Log in through the Admin menu
2. Add or remove staff users
3. Create or update menu items
4. Configure table setups for the day

-Staff Workflow

1. Log in using credentials assigned by Admin
2. Choose a table and place an order
3. Enter item quantities and submit order
4. Add temporary menu items 

-Frontend & Backend Interaction

-Frontend : Built with React + Vite for fast development and hot reloading
-Backend : Node.js with Express and Mongoose
-API Communication : RESTful APIs handle all interactions, including login, order submission, and menu management
-Database : MongoDB stores tables, orders, users, and menu data

Technologies Used

-Frontend: React, React Bootstrap, Vite
-Backend: Node.js, Express.js
-Database: MongoDB, Mongoose

 Conclusion
This project provides a reliable, user-friendly platform for managing restaurant orders and staff tasks. It streamlines communication between front-of-house and kitchen teams and reduces operational inefficiencies, demonstrating the power of full-stack web development in solving real-world problems.


