import joker from "give-me-a-joke";
import "adrian-package";

export function dadJoke() {
    return new Promise(function (resolve, reject) {
        try {
            joker.getRandomDadJoke(function (joke) {
                resolve(joke);
            });
        } catch (error) {
            reject(error);
        }
    });
}