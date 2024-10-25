**Date:** October 25, 2024  
**Version tested:** 1.0.0

## Test Environment

### Browser Specifications

- Chrome Version: 129.0.6668.91
- Safari Version: 17.6

### Operating Systems

- Windows 11 Pro 22H2
- macOS Sonoma 14.6.1
- iOS 18.0.1

### Screen Resolutions Tested

- Desktop: 1920x1080, 2560x1440
- Mobile:
  - iPhone 15 Pro Max: 430x932
  - iPhone 13: 390x844

### Test Environment Details

- Network: High-speed connection (100+ Mbps)
- Server Environment: Production
- Base URL: https://shape-sense-zone.netlify.app/#/
- API Version: 1.0

## Test Results Summary

Total Tests: 23  
✓ Passed: 21
✗ Failed: 2

| Test ID | Category         | Description             | Input Values                                                                     | Expected Output                                         | Status (✓/✗) | Notes                                         |
| ------- | ---------------- | ----------------------- | -------------------------------------------------------------------------------- | ------------------------------------------------------- | ------------ | --------------------------------------------- |
| 1       | BMI              | Calculate BMI (Metric)  | Weight: 70 kg<br>Height: 1.75 m                                                  | BMI, BMI prime, category, ideal weight and health risks | ✅           |                                               |
| 2       | BMI              | Invalid height value    | Weight: 70 kg<br>Height: -1.75 m                                                 | Error message                                           | ✅           |                                               |
| 3       | BMI              | Imperial calculation    | Weight: 154 lbs<br>Height: 5'9"                                                  | Correct BMI with metric conversion                      | ✅           |                                               |
| 4       | Body Composition | Waist-to-hip ratio      | Waist: 90 cm<br>Hip: 1.00 m                                                      | Ratio and health information                            | ✅           |                                               |
| 5       | Body Composition | Waist-to-height ratio   | Waist: 85 cm<br>Height: 1.75 m                                                   | Ratio with health information                           | ✅           |                                               |
| 6       | Body Composition | Missing hip measurement | Waist: 90 cm<br>Hip: missing                                                     | Error message                                           | ✅           |                                               |
| 7       | Body Fat         | Male calculation        | Waist: 70 cm<br>Neck: 40 cm<br>Weight: 80 kg                                     | Body fat percentage                                     | ✅           |                                               |
| 8       | Body Fat         | Female missing hip      | Waist: 70 cm<br>Neck: 30 cm<br>Weight: 60 kg<br>Hip: missing                     | Error message                                           | ✅           |                                               |
| 9       | Lean Body Mass   | Complete calculation    | Weight: 70 kg<br>Height: 1.75 m<br>Gender: Male                                  | Lean body mass value                                    | ✅           |                                               |
| 10      | Lean Body Mass   | Missing height          | Weight: 70 kg<br>Gender: Female                                                  | Error message                                           | ✅           |                                               |
| 11      | TDEE             | Both formulas           | Weight: 70 kg<br>Height: 1.75 m<br>Age: 30<br>Gender: Male<br>Activity: Moderate | Two TDEE values                                         | ✅           |                                               |
| 12      | TDEE             | Invalid weight          | Weight: 10 kg<br>Height: 1.75 m<br>Age: 30<br>Gender: Male                       | "Weight must be between 20 and 500kg"                   | ✅           |                                               |
| 13      | BMR              | Harris-Benedict         | Weight: 70 kg<br>Height: 1.75 m<br>Age: 30<br>Gender: Male                       | BMR value                                               | ✅           |                                               |
| 14      | BMR              | Missing age             | Weight: 70 kg<br>Height: 1.75 m<br>Gender: Male                                  | Error message                                           | ✅           |                                               |
| 15      | Weight Goal      | Complete calculation    | Weight: 80 kg<br>Height: 1.80 m<br>Goal: 70 kg<br>Weeks: 12                      | Daily caloric needs                                     | ✅           |                                               |
| 16      | Weight Goal      | Empty goal weight       | Empty input                                                                      | Error message                                           | ❌           | No Error message when weight goal is missing  |
| 17      | General          | Language check          | Navigate all pages                                                               | All text in English                                     | ✅           |                                               |
| 18      | Security         | XSS Prevention          | `<script>alert('XSS')</script>`                                                  | Sanitized input                                         | ✅           |                                               |
| 19      | UI               | Responsive design       | Various screen sizes                                                             | Proper layout adjustment                                | ✅           |                                               |
| 20      | Navigation       | Route validation        | All routes                                                                       | Correct views loaded                                    | ✅           |                                               |
| 21      | Data             | Data persistence        | Navigate between forms                                                           | Values remain                                           | ✅           |                                               |
| 22      | UI               | Reset functionality     | Fill form + click reset                                                          | All fields cleared                                      | ✅           |                                               |
| 23      | UI               | Unit system update      | Switch units                                                                     | Updated placeholders                                    | ❌           | Placeholer does not update dynamic any longer |
