// Mock website of oh.studio

The main HTML is in index.html.
The style is given by sass/index.scss, which imports the styles for all the pages.
On start, the window start listening to any change in the url.
Clicking on the header or a project updates the header which fires an event.
This event triggers the controller to generate and render the markup for the selected page.
The markup for the main pages is in js/js-html, while the markup for the project pages is generated in the projectView.js file.
Every time markup is rendered, event listeners get attached to the header,
and the correct elements get observed by an IntersectionObserver which gives them the sliding effect.
