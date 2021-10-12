0x00. Build a web app in JavaScript

In this project, you will finalize the previous project [0x0B. Implement a design with bootstrap](https://github.com/Valinor13/holberton-smiling-school) and make some parts dynamic with Javascript (JQuery exactly).

You will reuse final files of 0x0B. Implement a design with bootstrap and update them.

You will use all HTML/CSS/Accessibility/Responsive design/Bootstrap/Javascript knowledges that you learned previously.

You won’t have a lot of instruction, you are free to implement it the way that you want - the objective is simple: Have fully functional web pages that look the same as the designer file.

## Task 0: Reuse and polish your Bootstrap integration

For this task, please write an amazing README

Interactions note:

- Web pages must switch to the tablet version when the screen width is 768px
- Web pages must switch to the mobile version when the screen width is 576px
- button hover/active: opacity: 0.9

## Task 1: Homepage - quotes

Replace static quotes by dynamic loading:

- URL: [https://smileschool-api.hbtn.info/quotes]
- No static quotes should be present in the quotes section
- During the Ajax request, a loader should be present
- Carousel should work like before

## Task 2: Homepage - popular tutorials

Replace static video cards by dynamic loading:

- URL: https://smileschool-api.hbtn.info/popular-tutorials
- No static video cards should be present in the section
- During the Ajax request, a loader should be present
- Carousel should work by sliding card by card (like GIF below) - this kind of carousel is not unique, make it generic to reuse it easily!
- Don’t forget the responsive part!

## Task 3: Homepage - latest videos

Replace static video card by dynamic loading:

- URL: https://smileschool-api.hbtn.info/latest-videos
- No static video cards should be present in the section
- During the Ajax request, a loader should be present
- Carousel should work by sliding card by card (like GIF below) - this kind of carousel is not unique, make it generic to reuse it easily!
- Don’t forget the responsive part!

## Task 4: Pricing - quotes

Replace static quotes by dynamic loading:

- URL: https://smileschool-api.hbtn.info/quotes
- No static quotes should be present in the quotes section
- During the Ajax request, a loader should be present
- Carousel should work like before

## Task 5: Courses

Replace static video card by dynamic loading:

- URL: https://smileschool-api.hbtn.info/courses
    * GET parameters:
        - q: search value (in our case, the value of the field KEYWORDS)
        - topic: topic filter value (in our case, the value of the field TOPICS)
        - sort: order of all courses (in our case, the value of the field SORT BY)
- No static video cards should be present in the section
- During the Ajax request, a loader should be present
- Dropdowns are dynamic (coming from the API):
    * Topic: list of topics
    * Sort by: list of sorts
- Search value should be initialized by the value q in the API response
- The list of video cards is coming from courses in the API response
- API request must be done when:
    * Search value is changing
    * A new Topic is selected
    * A new Sort by is selected

### Contributors:

[Jay Calhoun](https://github.com/Valinor13)
