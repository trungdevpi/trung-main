exports.name = '/thread';
exports.index = async(req, res, next) => {
var link = req.query.link;
if (!link) return res.json({ error: 'Thiếu dữ liệu để khởi chạy chương trình ' });
var axios = require('axios');
axios({
    method: 'post',
    url: 'https://api.threadsphotodownloader.com/v2/media?url=' + link,
    data: {    
	url: link
	}
})
.then(function (response) {
    var data = response.data
    console.log(data)
    return res.json(data)
})
.catch(function (error) {
    return res.json({ error });
});
}
