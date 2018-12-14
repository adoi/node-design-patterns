class FileProxy {
    constructor(subject) {
        this.fs = subject;
    }

    readFile(path, format) {
        return new Promise((resolve, reject) => {
            if (path.match(/.md$/)) {
                reject(new Error(`Files with the .md extension cannot be read`));
            }

            this.fs.readFile(path, format, (err, content) => {
                if (err) {
                    reject(new Error(`Cannot be read`));
                }
                resolve(content);
            })
        });
    }
}

module.exports = FileProxy;