const { I } = inject();

Feature('getUsersList');

Scenario('API Get user list...', async () => {
    //Use async and await for API calls
    const res = await I.sendGetRequest('');
    I.assertEqual(res.status, 200)
    console.log('Response : ', res)
    console.log('Response status : ', res.status)
    console.log('Response Data: ', res.data)
});