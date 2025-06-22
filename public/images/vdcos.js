exports.name = '/images/vdcos';
exports.index = async(req, res, next) => {
    try {
        const vdcos = require('./data/json/vdcos.json');
        var image = vdcos[Math.floor(Math.random() * vdcos.length)].trim();
        res.jsonp({
            url: image,
            count: vdcos.length,
            author: 'Trung'
        });
    } catch (e) {
        return res.jsonp({ error: e });
    }
}
