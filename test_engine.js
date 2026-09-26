const runCurrentAffairsEngine = require('./current_affairs_engine');

(async () => {
    try {
        console.log("Testing current affairs engine...");
        await runCurrentAffairsEngine();
        console.log("Success!");
    } catch (e) {
        console.error("Error:", e);
    }
})();
