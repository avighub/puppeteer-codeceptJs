const { I } = inject();
var api = require("../../utils/utilsApi");

Feature('ListUsers');

Scenario('Get user lists by page', (I) => {
    api.getRequest('/api/users?page=2')
    const res = I.sendGetRequest('/api/users?page=2')
    I.assertEqual(res.status, 200)
});