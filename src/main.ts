import {createSSRApp} from "vue";
import App from "./App.vue";

export function createApp() {
    const app = createSSRApp(App);
    app.config.errorHandler = (err) => {
        console.error(err);
    };
    return {
        app,
    };
}
