# To-Do-List-with-a-Done-Sound-Audio-API-
Trimester js activity by YASH KUMAR

# 🎯 To-Do List with Ding Sound  
*A Lightweight Task Manager using Web APIs*

---

## 💡 Idea

The goal of this project is to create a **simple, interactive, and fun To-Do List application** that gives immediate feedback to the user whenever they mark a task as complete.

Instead of a plain checklist, the app uses:

- A **ding sound** when tasks are completed  
- **LocalStorage** to save tasks permanently  
- A clean, responsive UI  
- DOM manipulation and event handling  

---

## ✨ Features

### ✔ Add Tasks  
User can add tasks via the **input box** and **Add button** or simply press **Enter**.

### ✔ Mark Tasks as Done  
Clicking a task:

- Toggles the *completed* state  
- Plays a **ding sound** (once per task)  
- Applies a green highlight and strike-through text  

### ✔ Delete Tasks  
Each task includes a **delete button (✖)** which removes it immediately.

### ✔ Persistent Storage  
The app uses **LocalStorage** to store all tasks, meaning:

- Tasks remain even after the page is refreshed  
- The app works offline  
- No backend or server is required  

### ✔ Clean Responsive UI  
Includes custom fonts, background styling, and easy-to-read task items.

---

## 🧩 APIs Used

### 1️⃣ Web Audio API  
Used to load and play the **ding sound**:

```js
const ding = new Audio('ding.mp3');
ding.play();
