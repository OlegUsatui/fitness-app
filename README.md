# Your Energy Fitness App API Documentation

## Overview

This project is a fitness-focused web application that helps users discover and track different exercises to achieve their fitness goals. The app features an API that provides a range of fitness-related functionalities, such as exercise filtering, detailed exercise information, rating, and subscription services. This documentation explains how to use the available API endpoints.

## API Endpoints

### 1. Exercise Filters
- **Endpoint:** `/api/filters`
- **Method:** `GET`
- **Description:** Retrieve a list of filters based on different exercise criteria such as muscle groups, equipment, or body parts.
- **Example Request:**
  ```
  GET https://your-energy.b.goit.study/api/filters?filter=Muscles&page=1&limit=12
  ```
  You can filter by different criteria (`filter` parameter), and pagination is handled through `page` and `limit` parameters.

### 2. List of Exercises
- **Endpoint:** `/api/exercises`
- **Method:** `GET`
- **Description:** Get a list of exercises filtered by criteria like body part, muscle, equipment, or keyword.
- **Example Request:**
  ```
  GET https://your-energy.b.goit.study/api/exercises?bodypart=back&muscles=lats&equipment=barbell&keyword=pull&page=1&limit=10
  ```
  This endpoint allows filtering by `bodypart`, `muscles`, `equipment`, and `keyword`. You can also manage pagination using `page` and `limit` parameters.

### 3. Detailed Exercise Information
- **Endpoint:** `/api/exercises/{exerciseID}`
- **Method:** `GET`
- **Description:** Get detailed information about a specific exercise.
- **Example Request:**
  ```
  GET https://your-energy.b.goit.study/api/exercises/{exerciseID}
  ```
  Replace `{exerciseID}` with the unique identifier for the exercise you want to get details about.

### 4. Rate an Exercise
- **Endpoint:** `/api/exercises/{exerciseID}/rating`
- **Method:** `PATCH`
- **Description:** Add or update the rating for a specific exercise.
- **Example Request:**
  ```
  PATCH https://your-energy.b.goit.study/api/exercises/{exerciseID}/rating
  ```
  Replace `{exerciseID}` with the ID of the exercise.

### 5. Quote of the Day
- **Endpoint:** `/api/quote`
- **Method:** `GET`
- **Description:** Get an inspirational quote for the day.
- **Example Request:**
  ```
  GET https://your-energy.b.goit.study/api/quote
  ```

### 6. Subscription for Exercise Updates
- **Endpoint:** `/api/subscription`
- **Method:** `POST`
- **Description:** Subscribe to receive notifications about new exercises.
- **Example Request:**
  ```
  POST https://your-energy.b.goit.study/api/subscription
  ```
  The request should include the user's email address for receiving updates.

### Header
- The header includes a logo, navigation bar, and links to social media.
- **Mobile Version:** The header contains a burger menu, allowing users to navigate easily.
- **Tablet & Desktop Versions:** Displays the logo, navigation links, and social media links.

### Home Page
- **Hero Section:** Displays a static hero section with the website title, subtitle, and popular tags.
- **Filters Section:** Allows users to search for exercises based on categories such as body part, muscle, or equipment.
- **Category/Exercise List Section:** Shows a list of categories or exercises depending on selected filters.
- **Quote of the Day Section:** Displays an inspirational quote and information about the importance of daily exercise.

### Exercise Cards
- Each exercise card includes:
  - Exercise name
  - Calories burned in 3 minutes
  - Target body part
  - Purpose of the exercise
  - Exercise rating
  - A "Start" button to open a modal with more detailed information.

### Modal Window - Exercise Details
- Displays:
  - Exercise video (if available)
  - Exercise name
  - Exercise rating and goal
  - Target body part
  - Popularity among users
  - Calories burned per 3 minutes
  - Short description
  - "Add to Favorites" button
  - "Give a Rating" button to rate the exercise (including a modal form for submitting ratings with email validation).

### Favorites Page
- Displays:
  - Quote of the Day
  - List of user's favorite exercises, which are saved in local storage.
  - Allows users to remove exercises from favorites.

### Footer
- Contains:
  - Logo
  - Links to social media (Facebook, Instagram, YouTube)
  - Company slogan
  - Subscription form for updates about new exercises

## Additional Features
- **Favorites Section:** Users can add exercises to favorites, saved in local storage for persistence.
- **Exercise Rating:** Users can rate exercises and see other ratings.
- **Loader (Spinner):** Displayed during asynchronous requests.
- **Scroll Up Button:** Allows users to return to the top of the page with a single click.

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript
- **Backend API:** RESTful API for retrieving and managing exercises and user interactions

## Getting Started
1. Clone the repository.
2. Install dependencies using `npm install`.
3. Start the server with `npm start`.
4. Access the app in your browser at `http://localhost:3000`.

## Installation & Setup
1. Ensure you have Node.js installed.
2. Run `npm install` to install all dependencies.
3. Use `npm start` to start the development server.

## Contribution
Feel free to submit issues and pull requests to enhance the functionalities. Please follow the contribution guidelines.

## License
This project is licensed under the MIT License.

