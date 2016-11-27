module.exports = function(length) {
    if (!length || typeof length !== 'number') {
        return 'xxxxxxxxxxxx'.replace(/x/g, function() {
            return String.fromCharCode(Math.round((Math.random() * 25) + 97));
        });
    }

    if (length === 0) {
        return '';
    }

    var halfLength = length / 2;
    var hashBase = 'x';

    while (hashBase.length <= halfLength) {
        hashBase += hashBase;
    }

    // use substring to hit precise length target without using extra memory
    hashBase += hashBase.substring(0, length - hashBase.length);

    return hashBase.replace(/x/g, function() {
        return String.fromCharCode(Math.round((Math.random() * 25) + 97));
    });
};
