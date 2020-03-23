const http = require('http');

const endpoint = 'http://localhost:6060/debug/metrics'

const blacklist = {
    'cmdline': true,
    'one-minute': true,
    'mean': true,
    'five-minute': true,
    'fifteen-minute': true,
    'max': true,
    'min': true,
    'mean-rate': true,
    'std-dev': true,
    '50-percentile': true,
    '75-percentile': true,
    '95-percentile': true,
    '99-percentile': true,
    '999-percentile': true,
}

function generateConfig(data) {
    const fieldNames = Object.keys(data).filter(name => {
        const metricType = name.substring(name.lastIndexOf('.') + 1);
        return ! blacklist[metricType];
    });
    console.log(fieldNames);
}


http.get(endpoint, (resp) => {
  let data = '';

  // A chunk of data has been recieved.
  resp.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  resp.on('end', () => {
    const parsed = JSON.parse(data);
    generateConfig(parsed);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});
