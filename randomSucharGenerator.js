const http = require('follow-redirects').http;
const jsdom = require('jsdom');
const { JSDOM } = jsdom;
const options = {
    host: 'sucharry.pl',
    path: '/losuj'
};

function getRandomSucharr(successCallback, errorCallback, nofRecursionCalls) {
    let request = http.request(options, function (response) {
        let htmlData = '';
        response.on('data', function (chunk) {
            htmlData += chunk;
        });
        response.on('end', function () {
            const dom = new JSDOM(htmlData);
            const part1 = dom.window.document.querySelector('.suchar a.link');
            if (part1 === null || part1.textContent.indexOf('img') !== -1) {
                if (nofRecursionCalls > 5) {
                    errorCallback('Can\'t get sucharr, sry :(');
                } else {
                    getRandomSucharr(successCallback, errorCallback, nofRecursionCalls + 1);
                }
                return;
            }
            const part2 = dom.window.document.querySelector('.suchar a.showtxt');
            successCallback(part1.textContent + (part2 !== null ? '\n' + part2.getAttribute('data-txt') : ''));
        });
    });
    request.on('error', function (e) {
        errorCallback(e.message);
    });
    request.end();
}

module.exports = function () {
    return new Promise((resolve, reject) => {
        getRandomSucharr(resolve, reject, 1);
    });
};
