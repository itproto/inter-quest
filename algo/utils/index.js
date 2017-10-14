const test = (desc, cb) => {
    console.log(desc);
    cb();
    console.log('----');
};

module.exports = {
    test
};