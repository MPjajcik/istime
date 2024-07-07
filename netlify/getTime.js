const ntpClient = require('ntp-client');

exports.handler = async function(event, context) {
    return new Promise((resolve, reject) => {
        ntpClient.getNetworkTime("time.fi.muni.cz", 123, (err, date) => {
            if(err) {
                reject({
                    statusCode: 500,
                    body: JSON.stringify({ error: err.message })
                });
            }
            resolve({
                statusCode: 200,
                body: JSON.stringify({ time: date.toISOString() })
            });
        });
    });
};
