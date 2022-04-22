'use strict';

const pdf = require('html-pdf');
const fs  = require('fs');

const filepath = 'resume.pdf';
const html     = fs.readFileSync('resume.html', 'utf-8');

const options = {
    // format: 'legal',
    paperSize: {
        width: '10in',
        height: '8.5in'
    },
    border: {
        'top': '0in',            // default is 0, units: mm, cm, in, px
        'right': '1in',
        'bottom': '0in',
        'left': '1in'
    },
    zoomFactor: '0.25'
}

pdf.create(html, options).toFile(filepath, function(err, res) {
    if (err) {
        console.error(err);
    } else {
        console.log(res);
    }
});

// pdf.create(html).toBuffer(function(err, res) {
//     if (err) {
//         console.error(err);
//     } else {
//         console.log(res);
//     }
// });