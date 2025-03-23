# Learning React.js - Restaurant Application

Welcome to my repository where I document my progress and learnings from the "Namaste React" course by Akshay Saini, hosted on NamasteDev. This course offers an in-depth exploration into React.js, covering everything from the fundamentals to advanced concepts.

This repository contains a fully functional restaurant application built using React.js. The application demonstrates various React concepts, including component composition, hooks, routing, lazy loading, and more.

---

## Features Implemented

### 1. **Core React Concepts**
- **JSX and React.createElement**: Demonstrated in [`Ep1/App.js`](Ep1/App.js).
- **Functional Components**: Created reusable components like `HeadingComponent` and `HeadingComponent2`.
- **Class Components**: Example of a class component in [`Ep4/src/components/UserClass.js`](Ep4/src/components/UserClass.js).

### 2. **Routing**
- Implemented routing using `react-router-dom` in [`Ep4/src/App.js`](Ep4/src/App.js).
- Nested routes with `Outlet` for rendering child components dynamically.
- Error handling for invalid routes using the `Error` component.

### 3. **Dynamic Data Fetching**
- Fetched restaurant data from Swiggy's API in [`Ep4/src/components/Body.js`](Ep4/src/components/Body.js).
- Used the `useEffect` hook to fetch data on component mount.
- Created a custom hook `useRestaurantMenu` in [`Ep4/src/utils/useRestaurantMenu.js`](Ep4/src/utils/useRestaurantMenu.js) for fetching restaurant menu details.

### 4. **State Management**
- Managed component state using the `useState` hook.
- Implemented search functionality and filtering for restaurants in [`Ep4/src/components/Body.js`](Ep4/src/components/Body.js).

### 5. **Custom Hooks**
- `useOnlineStatus`: A custom hook to detect online/offline status in [`Ep4/src/utils/useOnlineStatus.js`](Ep4/src/utils/useOnlineStatus.js).
- `useRestaurantMenu`: A custom hook for fetching restaurant menu data.

### 6. **Lazy Loading**
- Implemented lazy loading for the `Grocery` component using `React.lazy` and `Suspense` in [`Ep4/src/App.js`](Ep4/src/App.js).

### 7. **Higher-Order Components (HOC)**
- Created a HOC `promotedLabel` to add a "Promoted" label to restaurant cards in [`Ep4/src/components/RestaurantCard.js`](Ep4/src/components/RestaurantCard.js).

### 8. **Reusable Components**
- **Header**: Contains navigation links and login/logout functionality in [`Ep4/src/components/Header.js`](Ep4/src/components/Header.js).
- **Body**: Displays a list of restaurants with search and filter options in [`Ep4/src/components/Body.js`](Ep4/src/components/Body.js).
- **RestaurantCard**: A reusable card component for displaying restaurant details in [`Ep4/src/components/RestaurantCard.js`](Ep4/src/components/RestaurantCard.js).
- **RestaurantMenuCard**: Displays detailed menu information for a selected restaurant in [`Ep4/src/components/RestaurantMenuCard.js`](Ep4/src/components/RestaurantMenuCard.js).
- **Shimmer**: A loading placeholder for better user experience in [`Ep4/src/components/Shimmer.js`](Ep4/src/components/Shimmer.js).

### 9. **Collapsible Categories**
- Implemented collapsible restaurant categories using the `RestaurantCategory` component in [`Ep4/src/components/RestaurantCategory.js`](Ep4/src/components/RestaurantCategory.js).

### 10. **Styling**
- Used Tailwind CSS for styling components.
- Added custom styles in [`Ep4/index.css`](Ep4/index.css) and [`Ep1/index.css`](Ep1/index.css).

---
### Rich Handwritten Notes
This repository also includes rich handwritten notes that complement the codebase. These notes are highly engaging, include detailed diagrams, and provide a deeper understanding of the concepts covered in the project.

#### Note: The notes are large in size due to the inclusion of high-quality diagrams and may take some time to download. Please be patient while accessing them.
## Dependencies

The following dependencies are required to run this project:

- **React**: `react`, `react-dom`
- **React Router**: `react-router-dom`
- **Tailwind CSS**: `tailwindcss`
- **Parcel**: `parcel`
- **React Icons**: `react-icons`
- **React Lazy Loading**: `react-lazy`
- **Other Utilities**: `@babel/core`, `@babel/preset-env`, `@babel/preset-react`

## How to Run the Project

1. Clone the repository:
   ```sh
   git clone https://github.com/rimjhimsingh/Learning-React.js.git
   cd Learning-React.js
   ```
2. Install dependencies:
    ```
    npm install
    ```
3. Start the development server:
    ```
    npm start
    ```

## Future Enhancements
- Add unit tests for components and hooks.
- Implement a global state management solution like Redux or Context API.
- Enhance the UI with animations and transitions.
- Add more features like user authentication and a shopping cart.

---

## Acknowledgments
- **Instructor**: Akshay Saini
- **Platform**: [NamasteDev](https://namastedev.com)
- **Course Link**: [Namaste React](https://namastedev.com/learn/namaste-react)

---

## Join My Journey
I encourage you to clone this repository and explore the materials. Let's learn and grow together in our React development skills!