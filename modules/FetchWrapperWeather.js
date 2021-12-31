import fetch from "node-fetch";

export default class FetchWrapperWeather {
    constructor(baseURL, key) {
        this.baseURL = baseURL;
        this.key = '?key=' + key;
    }

    get(endpoint, params) {
        return fetch(this.baseURL + endpoint + this.key + params)
        .then(response => response.json());
    }

    put(endpoint, body) {
        return this._send("put", endpoint, body);
    }

    post(endpoint, body) {
        return this._send("post", endpoint, body);
    }

    delete(endpoint, body) {
        return this._send("delete", endpoint, body);
    }

    _send(method, endpoint, body) {
        return fetch(this.baseURL + endpoint, {
            method,
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(body)
        }).then(response => response.json());
    }
}