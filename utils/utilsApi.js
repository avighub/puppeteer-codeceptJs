const { I } = inject();

var apiMethods = function () {
    this.getRequest = async (path, headers, params) => {
        I.sendGetRequest(path);
    }
}

module.exports = new apiMethods();