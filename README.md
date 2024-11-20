# 🌍 EcoScan - Clothing Carbon Footprint Scanner

## 📜 Overview
EcoScan is a web application designed to help users understand the environmental impact of their clothing. By uploading or capturing images of clothing items, users can see estimated carbon scores, earn eco-reward points, and redeem sustainability-focused offers. This project is a full-stack solution aimed at promoting sustainable practices.

## 🔧 Tech Stack
- **Frontend**: React.js, TailwindCSS
- **Backend**: Node.js, Express.js, TypeScript
- **Image Recognition**: Mock image analysis for development; integration-ready for AI/ML-based APIs.

---

## 🚀 Setup Instructions

1. **Clone the Repository**  
   Clone the repository and navigate into the project directory:
   ```bash
   git clone https://github.com/KshitijTodkar48/Eco-Scan.git
   cd Eco-Scan
   ```

2. **Install Dependencies**  
   Install dependencies for both frontend and backend:
   ```bash
    cd frontend
    npm install
   ```
   
   ```bash
    cd backend
    npm install
   ```

3. **Run the Application**
   - **Backend**: Start the backend server:
     ```bash
      cd backend
      npm run dev
     ```
   - **Frontend**: Start the frontend application:
     ```bash
      cd frontend
      npm run start
     ```

## 🌱 Carbon Score Assumptions

To calculate the environmental impact of each clothing item, we have assigned approximate carbon scores based on item type. These scores are stored in an in-memory dictionary for quick access.

| 👕 Item       | 🌍 Estimated Carbon Score (kg CO₂)|
|---------------|------------------------------------|
| T-shirt       |   5                                |
| Jeans         |   10                               |
| Sweater       |   7                                |
| Jacket        |   15                               |
| Socks         |   2                                |
| Shoes         |   12                               |
| Scarf         |   4                                |
| Hat           |   3                                |
------------------------------------------------------

## 🌟 Product & Technical Enhancements

In this section, suggest possible improvements that could make **EcoScan** a more effective and scalable solution.

1. **🌐Scaling**:
- Introduce a robust database like MongoDB for storing user-uploaded image data and eco-reward points.
- Implement caching (e.g., Redis) for frequent queries to optimize performance.
- Scale horizontally by deploying the backend on a cloud platform like AWS or Google Cloud using load balancers.
- Utilize a CDN (Content Delivery Network) for serving static assets to reduce load times.
- Migrate to a microservices architecture to isolate modules like image processing and eco-reward calculations for better fault tolerance.
- Use containerization (e.g., Docker) and orchestration tools like Kubernetes to ensure smooth scaling and deployment.
  
2. **📊 Enhanced Eco-Score Model**:
 - Include additional parameters like clothing material, manufacturing origin, and user-input brand data.
 - Use external APIs for real-time carbon impact data.
   
3. **✨ User Experience Improvements**:
 - Add interactive visualizations for carbon impact comparisons (e.g., bar graphs, pie charts).
 - Allow users to track their sustainability progress over time with personal dashboards.
 - Introduce gamification elements like badges and milestones for eco-reward achievements.
 - Create an "Eco Tips" section with actionable advice on reducing carbon footprints.
 - Implement a dark mode for better accessibility and user comfort.
 - Allow users to share their eco-savings on social media to inspire others.

4. **🔌 API Integrations**: 
 - Integrate with services like OpenAI’s Vision API or TensorFlow for advanced image recognition.

   
## 📲 Deployment

If deployed, include a link here to access the live version of **EcoScan**.

- **URL**: [Insert deployment link here if deployed]

---

### Thank you for building a greener future with EcoScan! 🌍💚
