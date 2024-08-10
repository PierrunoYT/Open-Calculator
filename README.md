# iPhone-Style Calculator

This project is a web-based calculator that mimics the style and functionality of the iPhone calculator. It's built using HTML, CSS, and JavaScript, with a Flask backend.

## Features

- Basic arithmetic operations: addition, subtraction, multiplication, and division
- Percentage calculation
- Sign change (+/-)
- Decimal point input
- Clear function (AC)
- Responsive design
- Dark/Light mode toggle with preference saving

## Technologies Used

- HTML5
- CSS3
- JavaScript
- Flask (Python web framework)

## Project Structure

```
Open-Calculator/
│
├── app.py                 # Flask application file
├── index.html             # Main HTML file
├── LICENSE                # MIT License file
├── README.md              # This file
│
└── static/
    ├── styles.css         # CSS styles for the calculator
    └── script.js          # JavaScript for calculator functionality
```

## Prerequisites

- Python 3.6 or higher
- Flask

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/Open-Calculator.git
   cd Open-Calculator
   ```

2. Create a virtual environment (optional but recommended):
   ```
   python -m venv venv
   source venv/bin/activate  # On Windows use `venv\Scripts\activate`
   ```

3. Install the required packages:
   ```
   pip install flask
   ```

## Running the Application

1. Start the Flask server:
   ```
   python app.py
   ```

2. Open a web browser and navigate to `http://localhost:5000`

## Usage

- Use the number buttons to input digits
- Use the operator buttons (+, -, ×, ÷) for arithmetic operations
- Press '=' to calculate the result
- Use 'AC' to clear the calculator
- '+/-' changes the sign of the current number
- '%' converts the current number to a percentage
- The 🌓 button in the top-right corner toggles between dark and light modes

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Inspired by the iPhone calculator design
- Thanks to all contributors who have helped to improve this project
