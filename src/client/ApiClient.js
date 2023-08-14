const ApiMethod = require("../api/ApiMethod.js");
const ApiRequest = require("../api/ApiRequest.js");
const Client = require("./Client");

class ApiClient {
    constructor(client) {
        /**
         * @private
         * @type {string}
         */
        /**
         * @type {Client}
         */
        this.client = client;
        /**
         * @type {ApiRequest}
         */
        this.requests = new ApiRequest();
        /**
         * @type {ApiMethod}
         */
        this.methods = new ApiMethod(this.client, this);
    }
}

module.exports = ApiClient;