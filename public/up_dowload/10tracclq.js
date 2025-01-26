const axios = require('axios');

exports.name = '/10tracclq';

exports.index = async (req, res) => {
    const { apikey } = req.query;
    
    if (!apikey || apikey !== 'acclq') {
        return res.json({ result: 'Lấy apikey liên hệ admin' });
    }

    const ACCOUNTS_URL = 'https://raw.githubusercontent.com/TNTxTrick/10tr-acc-lq/main/10tr-acc-lq.txt';

    // Function to fetch accounts from URL
    const fetchAccountsFromUrl = async (url) => {
        try {
            const response = await axios.get(url);
            return response.data.split('\n').map(line => line.replace(/[\t\r]/g, '').trim()).filter(line => line !== '');
        } catch (err) {
            console.error('Error fetching the accounts:', err);
            return [];
        }
    };

    // Function to select a random account
    const getRandomAccount = (accounts) => {
        const randomIndex = Math.floor(Math.random() * accounts.length);
        return accounts[randomIndex];
    };

    // Fetch accounts and get a random account
    const accounts = await fetchAccountsFromUrl(ACCOUNTS_URL);

    if (accounts.length === 0) {
        return res.status(500).json({ error: 'No accounts available' });
    }

    const randomAccount = getRandomAccount(accounts);
    res.json({ account: randomAccount });
};
