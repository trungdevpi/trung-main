exports.name = '/github/search';
exports.index = async(req, res, next) => {
const user = req.query.user;
if (!user) return res.json({ error: 'Thiếu dữ liệu để khởi chạy chương trình ' });
const axios = require('axios');

const options = {
  method: 'GET',
  url: 'https://github-repos.p.rapidapi.com/search',
  params: {user: user},
  headers: {
    'X-RapidAPI-Key': 'fd92cf57c9msh1f7b78b804353c7p1548f3jsn69db0304865d',
    'X-RapidAPI-Host': 'github-repos.p.rapidapi.com'
  }
};

  try {
      const response = await axios.request(options);
      console.log(response.data);
      return res.json(response.data);
    } catch (error) {
      console.error(error);
      return res.json({ error: 'Có lỗi xảy ra khi tải từ API' });
    }
  };
