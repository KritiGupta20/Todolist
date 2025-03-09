A simple Kanban-style Todo board built using React and React DnD. This project allows users to manage their tasks visually with drag-and-drop functionality.

Features:-
Fetch and display todos from the DummyJSON API.
Create, update, and delete todos.
Move todos between lanes using drag-and-drop.
Fully responsive UI.


How to Run the Project Locally:-

Prerequisites:-

Ensure you have the following installed:-

Node.js (latest LTS recommended)
npm or yarn

Steps:-

Clone the Repository
[git clone https://github.com/your-username/trello-todo-board.git]   

Install Dependencies - 
npm install  

Start the Development Server
npm run dev  
The app will be available at http://localhost:5173.

Approach Taken:-
Component-Based Architecture

The application is broken into modular React components (App.jsx, Lane.jsx, TodoCard.jsx).
State Management

Used React hooks (useState, useEffect) to manage todos.
Implemented context-based updates to minimize unnecessary re-renders.
Drag and Drop

Used React DnD to enable smooth drag-and-drop functionality.
API Integration

Used fetch() to interact with the DummyJSON API for CRUD operations.
Trade-offs and Improvements
Trade-offs:
Limited Styling: The UI is intentionally minimal for simplicity.
No Backend: The app relies on a third-party API and does not persist todos across reloads.
Possible Improvements:
Persistent Storage: Add localStorage or connect to a backend for persistent todos.
Advanced UI: Improve UI with animations and better styling.
Better Error Handling: Display messages when API calls fail.
