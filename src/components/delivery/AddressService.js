import axios from "axios";

// TODO: Declare url for rest api
// const ADDRESS_API_BASE_URL_WSO2 = "http://localhost:8280/delivery";
// const POSTMAN_API_BASE_URL_WSO2 = "http://localhost:8280/delivery";
// const ADDRESS_API_BASE_URL_REST_API = "http://localhost:8083/api/address";
// const POSTMAN_API_BASE_URL_REST_API = "http://localhost:8083/api/postman";

const DELIVERY_API_URL = "http://40.115.93.16:8080";

class AddressService {

    // TODO: Getting calculated value for address
    postCalculateAddress(address) {
        return axios.post(DELIVERY_API_URL + '/api/address/calculate', address)
            .then((data)=>{
                return data.data;
            });
    }

    // TODO: Add new address to database
    postAddress(address) {
        return axios.post(DELIVERY_API_URL + '/api/address/add', address);
    }

    // TODO: Add order from checkout process
    postCheckoutOrder(postman) {
        return axios.post(DELIVERY_API_URL + '/api/postman/add', postman);
    }

    // TODO: Get last added order from database
    getLastOrder() {
        return axios.get(DELIVERY_API_URL + '/api/postman/last');
    }

    // Update Last Order
    updateLastOrder(postman) {
        return axios.put(DELIVERY_API_URL + '/api/postman/update', postman);
    }
}

export default new AddressService();
