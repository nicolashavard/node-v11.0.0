const assert = require('assert');



function log(req) {
    try {
        const reponse = pouet(req);
        assert.strictEqual(reponse, 'bonjour');
    } catch (err) {
        console.log(err.message);
    }
}

log(2);

function pouet(req) {
    if (req === 1) {
        return 'bonjour';
    } else if (req === 2) {
        return 'bonsoir';
    } else {
        return 'au revoir';
    }
}