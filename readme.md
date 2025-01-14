# Sunny React Project

Welcome to the Sunny React Project! This is a static website designed for elderly care services. It includes several pages that provide information about the services offered, testimonials, and contact details. Follow the steps below to get started.

## Getting Started

### Prerequisites

Make sure you have the following installed on your system:

- [Node.js](https://nodejs.org/) (version 14 or above is recommended)
- npm (comes with Node.js)
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/heyab-gebremariam/sunny.git
   ```

2. Navigate into the project folder:

   ```bash
   cd sunny
   ```

3. Install the project dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm start
   ```

5. Open your browser and navigate to:

   ```
   http://localhost:3000
   ```

## Website Structure

The website consists of the following pages:

- **Home**: The main landing page providing an overview of the services.
- **Services**: A detailed description of the elderly care services offered.
- **Testimonials**: Feedback and reviews from clients.
- **About**: Information about the organization and its mission.
- **Contact**: A contact form and details to get in touch with the team.

### Application Code

The website is built using React Router for navigation. Below is the main structure of the application:

```jsx
const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
```

## Features

- User-friendly interface tailored for elderly care services
- Static pages with seamless navigation
- Modular and reusable components

## Contributing

We welcome contributions! Please fork the repository and submit a pull request for any changes or enhancements.

## License

This project is licensed under the [MIT License](LICENSE).

---

Thank you for checking out the Sunny React Project! If you encounter any issues or have questions, feel free to open an issue in the repository.
