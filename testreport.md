# Manual Test Report - Health Calculator Web Application

**Date:** October 25, 2024  
**Version Tested:** 1.0.0

## Test Environment

- **Browsers Tested:**
  - Chrome Version: 129.0.6668.91
  - Safari Version: 17.6
- **Operating Systems:**
  - Windows 11 Pro 22H2
  - macOS Sonoma 14.6.1
  - iOS 18.0.1
- **Screen Resolutions:**
  - Desktop: 1920x1080, 2560x1440
  - Mobile:
    - iPhone 15 Pro Max: 430x932
    - iPhone 13: 390x844
- **Network:** High-speed connection (100+ Mbps)
- **Server Environment:** Production
- **Base URL:** https://shape-sense-zone.netlify.app/#/

---

## Summary of Test Results

- **Total Tests:** 26
- **Passed:** 24
- **Partial:** 1
- **Failed:** 2

---

## Test Cases

### Legend

- **Status Icons:**
  - ✅ Pass
  - ❌ Fail
  - ⚠️ Partial

---

### Table of Test Cases

| Test Case No. | Requirement No. (Krav)      | Test Case Name                         | Input                                                                                                                                                                                                                            | Expected Output                                                                                                                                                                                                                                                                                                  | Comments                                                                                              | Status     |
| ------------- | --------------------------- | -------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------- | ---------- |
| **1.1**       | 1                           | Basic BMI Calculation - Metric         | - Unit System: Metric<br>- Weight: 70 kg<br>- Height: 1.75 m                                                                                                                                                                     | - BMI value: **22.9**<br>- BMI category: **"Normal weight"**<br>- Health risks: **Lowest health risks with a balanced lifestyle.**<br>- Ideal weight: **56.7 - 76.3 kg**                                                                                                                                         |                                                                                                       | ✅ PASS    |
| **1.2**       | 1                           | Input Validation                       | - Weight: **-70 kg**<br>- Height: **0 m**                                                                                                                                                                                        | - Error message: **"Invalid Weight value"**                                                                                                                                                                                                                                                                      |                                                                                                       | ✅ PASS    |
| **1.3**       | 1                           | BMI Calculator - Imperial              | - Unit System: Imperial<br>- Weight: **154 lbs**<br>- Height: **5.75 ft**                                                                                                                                                        | - BMI value: **22.7**<br>- BMI category: **"Normal weight"**<br>- Health risks: **Lowest health risks with a balanced lifestyle.**<br>- Ideal weight: **56.8 - 76.5 kg**                                                                                                                                         |                                                                                                       | ✅ PASS    |
| **2.1**       | 2                           | Waist-to-Hip Ratio Calculation         | - Unit System: Metric<br>- Waist: **80 cm**<br>- Hip: **100 cm**                                                                                                                                                                 | - Waist-to-hip ratio: **0.8**                                                                                                                                                                                                                                                                                    |                                                                                                       | ✅ PASS    |
| **2.2**       | 2                           | Waist-to-Height Ratio Calculation      | - Unit System: Metric<br>- Waist: **80 cm**<br>- Height: **1.75 m**                                                                                                                                                              | - Waist-to-height ratio: **0.46**                                                                                                                                                                                                                                                                                |                                                                                                       | ✅ PASS    |
| **3.1**       | 3                           | Male Body Fat Calculation - Metric     | - Gender: **Male**<br>- Unit System: Metric<br>- Weight: **65 kg**<br>- Height: **1.75 m**<br>- Waist: **85 cm**<br>- Neck: **37 cm**                                                                                            | - Body fat percentage: **17.71%**<br>- Lean Body Mass: **53.49 kg**                                                                                                                                                                                                                                              |                                                                                                       | ✅ PASS    |
| **3.2**       | 3                           | Female Body Fat Calculation - Metric   | - Gender: **Female**<br>- Unit System: Metric<br>- Height: **1.65 m**<br>- Waist: **75 cm**<br>- Neck: **32 cm**<br>- Hip: **95 cm**                                                                                             | - Body fat percentage: **27.43%**<br>- Lean Body Mass: **47.17 kg**                                                                                                                                                                                                                                              |                                                                                                       | ✅ PASS    |
| **3.3**       | 3                           | Male Body Fat Calculation - Imperial   | - Gender: **Male**<br>- Unit System: Imperial<br>- Weight: **143 lbs**<br>- Height: **5 ft 9 in**<br>- Waist: **33.5 in**<br>- Neck: **14.6 in**                                                                                 | - Body fat percentage: **16.91%**<br>- Lean Body Mass: **53.90 kg**                                                                                                                                                                                                                                              |                                                                                                       | ✅ PASS    |
| **3.4**       | 3                           | Female Body Fat Calculation - Imperial | - Gender: **Female**<br>- Unit System: Imperial<br>- Weight: **130 lbs**<br>- Height: **5 ft 5 in**<br>- Waist: **29.5 in**<br>- Neck: **12.6 in**<br>- Hip: **37.4 in**                                                         | - Body fat percentage: **26.69%**<br>- Lean Body Mass: **43.23 kg**                                                                                                                                                                                                                                              |                                                                                                       | ✅ PASS    |
| **4.1**       | 5                           | TDEE Calculation                       | - Weight: **70 kg**<br>- Height: **1.75 m**<br>- Age: **30**<br>- Gender: **Male**<br>- Activity Level: **Moderate Activity**                                                                                                    | - TDEE (Harris-Benedict): **2628 kcal/day**<br>- TDEE (Mifflin-St Jeor): **2556 kcal/day**<br>- Clear explanation of results                                                                                                                                                                                     |                                                                                                       | ✅ PASS    |
| **5.1**       | 7                           | Weight Goal Calculation                | - Gender: **Male**<br>- Height: **1.75 m**<br>- Current Weight: **80 kg**<br>- Age: **30**<br>- Activity Level: **Sedentary**<br>- Goal Weight: **75 kg**<br>- Timeframe: **8 weeks**<br>- Current Daily Calories: **2000 kcal** | - Estimated time to reach weight goal: **33.0 weeks**                                                                                                                                                                                                                                                            |                                                                                                       | ✅ PASS    |
| **6.1**       | N/A                         | Navigation Testing                     | - Click through all main navigation links:<br>Home (/), BMI (/bmi), BMR (/bmr), TDEE (/tdee), etc.                                                                                                                               | - All routes accessible<br>- No 404 errors<br>- Correct content loaded for each route<br>- Navigation menu visible and functional                                                                                                                                                                                |                                                                                                       | ✅ PASS    |
| **7.1**       | Krav om tid finns 2         | Unit Conversion                        | - Enter values in Metric<br>- Switch to Imperial<br>- Switch back to Metric                                                                                                                                                      | - Values automatically converted<br>- No data loss during conversion<br>- Accurate conversion results                                                                                                                                                                                                            | **The calculations are performed correctly, but there's no visual update; it's not yet implemented.** | ⚠️ PARTIAL |
| **8.1**       | 8                           | Knowledge Base                         | - Review information sections on each calculator page                                                                                                                                                                            | - Clear explanations present<br>- Limitations clearly stated<br>- Additional health indicators mentioned<br>- All content in English                                                                                                                                                                             |                                                                                                       | ✅ PASS    |
| **9.1**       | 6                           | BMR Calculation - Metric (Male)        | - Unit System: Metric<br>- Weight: **70 kg**<br>- Height: **1.75 m**<br>- Age: **30**<br>- Gender: **Male**                                                                                                                      | - BMR (Harris-Benedict): **1696 kcal/day**<br>- BMR (Mifflin-St Jeor): **1649 kcal/day**                                                                                                                                                                                                                         |                                                                                                       | ✅ PASS    |
| **9.2**       | 6                           | BMR Calculation - Imperial (Female)    | - Unit System: Imperial<br>- Weight: **132 lbs**<br>- Height: **5.33 ft**<br>- Age: **25**<br>- Gender: **Female**                                                                                                               | - BMR (Harris-Benedict): **1396 kcal/day**<br>- BMR (Mifflin-St Jeor): **1328 kcal/day**                                                                                                                                                                                                                         |                                                                                                       | ✅ PASS    |
| **10.1**      | 5                           | TDEE with Different Activity Levels    | - Base Values:<br>&nbsp;&nbsp;- Weight: **70 kg**<br>&nbsp;&nbsp;- Height: **1.75 m**<br>&nbsp;&nbsp;- Age: **30**<br>&nbsp;&nbsp;- Gender: **Male**<br>- Test all activity levels                                               | - TDEE for each activity level:<br>&nbsp;&nbsp;- Sedentary: **2035-1979 kcal/day**<br>&nbsp;&nbsp;- Light Active: **2332-2267 kcal/day**<br>&nbsp;&nbsp;- Moderate Active: **2628-2556 kcal/day**<br>&nbsp;&nbsp;- Very Active: **2925-2844 kcal/day**<br>&nbsp;&nbsp;- Extremely Active: **3222-3133 kcal/day** |                                                                                                       | ✅ PASS    |
| **10.2**      | 5                           | TDEE Imperial Calculation              | - Unit System: Imperial<br>- Weight: **154 lbs**<br>- Height: **5.75 ft**<br>- Age: **30**<br>- Gender: **Male**<br>- Activity Level: **Moderate Active**                                                                        | - TDEE (Harris-Benedict): **2627 kcal/day**<br>- TDEE (Mifflin-St Jeor): **2556 kcal/day**                                                                                                                                                                                                                       |                                                                                                       | ✅ PASS    |
| **11.1**      | 2                           | WHR Imperial Calculation               | - Unit System: Imperial<br>- Waist: **31.5 in**<br>- Hip: **39.4 in**                                                                                                                                                            | - Waist-to-Hip Ratio: **0.80**                                                                                                                                                                                                                                                                                   |                                                                                                       | ✅ PASS    |
| **13.1**      | Validering och felhantering | Required Fields Test                   | - Submit forms without filling any fields                                                                                                                                                                                        | - Error messages for empty required fields                                                                                                                                                                                                                                                                       |                                                                                                       | ✅ PASS    |
| **13.2**      | Validering och felhantering | Numeric Input Validation               | - Test numeric fields with:<br>&nbsp;&nbsp;- Negative numbers<br>&nbsp;&nbsp;- Zero values<br>&nbsp;&nbsp;- Text input<br>&nbsp;&nbsp;- Special characters<br>&nbsp;&nbsp;- Extremely large numbers                              | - Appropriate error messages<br>- Form submission prevented                                                                                                                                                                                                                                                      |                                                                                                       | ✅ PASS    |
| **14.1**      | 7                           | Unrealistic Goals Warning              | - Unit System: Metric<br>- Gender: **Male**<br>- Age: **27**<br>- Activity Level: **Sedentary**<br>- Current Weight: **80 kg**<br>- Goal Weight: **60 kg**<br>- Timeframe: **4 weeks**                                           | - Warning message about unsafe weight loss rate                                                                                                                                                                                                                                                                  | **Issue:** Shows -3284 kcal/day (Not optimal, should handle a limit here)                             | ❌ FAIL    |
| **14.2**      | 7                           | Weight Gain Goals                      | - Unit System: Metric<br>- Gender: **Male**<br>- Age: **27**<br>- Activity Level: **Sedentary**<br>- Current Weight: **65 kg**<br>- Goal Weight: **75 kg**<br>- Timeframe: **12 weeks**                                          | - Calories needed per day to reach your weight goal: **2892 kcal/day**                                                                                                                                                                                                                                           |                                                                                                       | ✅ PASS    |
| **15.1**      | Krav om tid finns 1         | Mobile Layout                          | - Test all calculators on mobile viewport (**375px** width)                                                                                                                                                                      | - Readable text size<br>- Properly stacked form elements<br>- Functional mobile navigation<br>- No horizontal scrolling                                                                                                                                                                                          |                                                                                                       | ✅ PASS    |
| **16.1**      | 9                           | English Language Consistency           | - Navigate through all pages<br>- Check all text content including labels, buttons, error messages, help text, and results                                                                                                       | - All content in English<br>- Consistent terminology<br>- Proper grammar and spelling<br>- Professional tone                                                                                                                                                                                                     |                                                                                                       | ✅ PASS    |
| **16.2**      | 9                           | Educational Content Accuracy           | - Review all educational sections<br>- Verify scientific accuracy of formulas and explanations                                                                                                                                   | - Accurate information<br>- Scientific backing<br>- Clear explanations<br>- Proper citations where needed                                                                                                                                                                                                        |                                                                                                       | ✅ PASS    |

---

## Issues and Recommendations

1. **Display Units Consistency (High Priority)**

   - **Issue:** Results displayed in kg when using the Imperial system.
   - **Recommendation:** Match display units to the selected system.
   - **Affected Calculations:** Body Fat Percentage, Lean Body Mass.

2. **Dynamic Placeholders**

   - **Issue:** Input field placeholders do not update when switching unit systems.
   - **Recommendation:** Implement dynamic placeholders that reflect the current unit system.

3. **Weight Goal Validation (High Priority)**
   - **Issue:** Extreme weight loss goals produce invalid negative calorie results (e.g., -3284 kcal/day).
   - **Recommendation:** Implement proper validation with:
     - Minimum safe calorie intake limits.
     - Warning messages for unsafe weight loss rates.
     - Maximum reasonable weight loss percentage per week.

---

## Validation Testing

- **Required Field Validation:** All forms correctly display error messages when required fields are left empty.
- **Numeric Input Validation:** Forms prevent submission and display appropriate error messages for invalid inputs, including negative numbers, zero values, text, special characters, and extremely large numbers.
- **Form Submission Handling:** Forms handle validation errors gracefully without loss of user input data.

---

## Security Testing

- **Cross-Site Scripting (XSS):** Input fields have been tested for XSS vulnerabilities; no issues found.
- **Input Sanitization:** All user inputs are properly sanitized before processing.
- **No Security Issues Found.**

---

## Additional Notes

- **Responsive Design:** The application is fully responsive across tested devices and resolutions.
- **Language and Content:** All content is in English with consistent terminology and professional tone.
- **Educational Content:** Information provided is accurate, scientifically backed, and well-explained.

---

## Conclusion

The Health Calculator Web Application performs as expected for the majority of test cases. Addressing the identified issues, especially those marked as high priority, will enhance user experience and reliability.

---
