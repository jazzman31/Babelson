'use strict';

var path = require('path');
var fs = require('fs');
var templatesDir = '../../content/html/templates/';
var indexFullPath = '../../content/html/base.html';
var targetIndexFullPath = '../../content';
var resolvedTemplatesPath = path.resolve(__dirname, templatesDir);
var resolvedIndexPath = path.resolve(__dirname, indexFullPath);
var resolvedTargetIndexFullPath = path.resolve(__dirname, targetIndexFullPath) + '/index.html';
var indexMarkup;
var templatesBlockMarkup = [];
var filelist = [];

const walkSync = (dir, filelist = []) => {
    fs.readdirSync(dir).forEach(file => {
        filelist = fs.statSync(path.join(dir, file)).isDirectory() ? walkSync(path.join(dir, file), filelist) : filelist.concat(path.join(dir, file));
    });
    return filelist;
};

var result = [];
walkSync(resolvedTemplatesPath).forEach(file => {
    result.push(fs.readFileSync(file, 'utf-8'));
});

fs.readFile(resolvedIndexPath, 'utf-8', (err, data) => {
    indexMarkup = data;
    indexMarkup = indexMarkup.replace('<templates></templates>', result.join('\r\n'));
    console.log('before unlink: ');
    fs.unlink(resolvedTargetIndexFullPath, function (err) {

        // Ignore error if no file already exists
        if (err && err.code !== 'ENOENT') throw err;

        var options = { flag: 'w' };
        fs.writeFile(resolvedTargetIndexFullPath, indexMarkup, options, function (err) {
            if (err) throw err;
            console.log('file saved');
        });
    });
});

//# sourceMappingURL=TemplatesAppender.js.map