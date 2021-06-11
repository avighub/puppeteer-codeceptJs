// enable I and another page object from conf.js
const { I, to_do_pageObjectPage } = inject();

Feature('todoMvc');

Scenario('test something', () => {
    I.say('Starting test...')
    //Calling function from page object
    to_do_pageObjectPage.initFunction()
});
