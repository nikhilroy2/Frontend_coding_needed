 Create a sign up form
• The form should be a single page.
• Style it any way you want. Try to make it look good enough that you'd visit it yourself.
• Create your own site logo (you can use the logo from the previous assignment).
• Use flexbox to align the content/image(s) and form in the same row
• Use CSS to make sure all images resize when resizing browser
• Login form should include
- Required text field for applicant name
- Required tel field for applicant phone
- Required email field for applicant email
- Text field for current employer
- Radio buttons for salary (< $20k, $20k - $50k, $50k+)
- Checkboxes for ‘interested in’ (studio, 1 bedroom, 2 bedroom) but show images instead of text
- Submit button
• Include the following Javascript events (using addEventListener(), not html events)
- When user hits a key in a text/tel/email field, play a sound
- When user leaves a text/tel/email field (on blur), play a sound
- When a user enters a text/tel/email field (on focus), add a highlighting style to the field's label
(either by applying class to field or actually changing element style)
- When a user leaves a text/tel/email field (on blur), remove highlighting label style
(either by removing class from field or actually changing element style)
- If user selects salary < $20k, play a sound
- When user hovers over (mouse over) ‘interested in’ image, change source
- When user leaves (mouse out) ‘interested in’ image, restore original image
- When user submits:
+ prevent default submit functionality
+ Chack and make sure all required fields have value.
+ Gather all the information from the form and displayed in an alert pop up.
