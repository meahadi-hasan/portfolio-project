# Portfolio Project  

This repository contains the source code and assets for my **Personal Portfolio Website**, which showcases my skills, projects, and professional background. 
This project was created as part of a lab assignment to demonstrate both frontend and backend integration.

---

## 🚀 **Live Preview**  
🌐 [View the Live Site Here](https://meahadi-hasan.github.io/my-portfolio)  

---

## 📋 **Features**  
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices.  
- **Interactive UI**: Smooth navigation and visually appealing animations.  
- **Contact Form**:  
  - Saves user messages to a database (MongoDB Atlas).  
  - Backend built with **Node.js** and **Express.js**.  
- **Admin Panel**: Accessible interface to view and manage user messages.  
- **Portfolio Showcase**: Highlights my skills, experience, and projects.

---

## 🛠️ **Technologies Used**  

### Frontend:  
- **HTML5**, **CSS3**, **JavaScript**  
- **Responsive Design** with CSS Flexbox/Grid  

### Backend:  
- **Node.js**, **Express.js**  

### Database:  
- **MongoDB Atlas**  

### Deployment Tools:  
- **GitHub Pages** (Frontend)  
- **Render** (Backend for dynamic features)  

---

## 📁 **Project Structure**  

```plaintext
portfolio-project/
├── Portfolio/         # Frontend source code
│   ├── index.html     # Main entry file
│   ├── styles.css     # CSS styles
│   └── script.js      # JavaScript functionality
├── portfolio-server/  # Backend source code
│   ├── server.js      # Express server
│   ├── routes/        # API routes
│   └── config/        # MongoDB configuration
├── README.md          # Project documentation
├── package.json       # Backend dependencies
└── package-lock.json  # Dependency tree
```

---

## 📋 **Installation & Setup**  

To set up the project locally, follow these steps:

### Prerequisites:  
- Install **Node.js** and **npm**.  
- Create a **MongoDB Atlas Cluster** and configure the database connection string.

### Steps:  

#### 1. Clone the Repository  
```bash
git clone https://github.com/meahadi-hasan/portfolio-project.git
```

#### 2. Navigate to the Server Directory  
```bash
cd portfolio-project/portfolio-server
```

#### 3. Install Dependencies  
```bash
npm install
```

#### 4. Start the Backend Server  
```bash
node server.js
```

#### 5. Open Frontend Files in a Browser  
Navigate to the `Portfolio` directory and open `index.html` in your browser.

---

## 💡 **Key Challenges & Solutions**  
1. **Database Connectivity**:  
   - **Issue**: Encountered issues with MongoDB Atlas connection.  
   - **Solution**: Corrected connection string and ensured proper IP whitelisting.

2. **Hosting Backend**:  
   - **Issue**: GitHub Pages does not support backend hosting.  
   - **Solution**: Used **Render** to host the backend and connected it with the frontend.

---

## 📝 **Future Improvements**  
- Add authentication for the admin panel.  
- Optimize loading times for images and assets.  
- Implement real-time message notifications.  

---


## 🤝 **Acknowledgments**  
- Special thanks to my instructors and peers for their guidance and feedback.  
- Inspired by various web development tutorials and resources.  

