module.exports = function time_plugins(schema, options) {

    // fields add kar raha hai
    schema.add({ createdAt: Date });
    schema.add({ lastAccess: Date });

    // save se pehle chalega
    schema.pre('save', function (next) {
        this.createdAt = new Date();
        this.lastAccess = new Date();
        next();
    });

    // find ke baad chalega
    schema.post('find', async function () {
        await this.updateMany({}, { lastAccess: new Date() }).clone();
    });
};
