import Vue from 'vue'
import $http from "@/api/https.js";

export const actions = {
    exampleAPI(state, url) {
        return $http({
            method: 'GET',
            url: url
        })
    },
}