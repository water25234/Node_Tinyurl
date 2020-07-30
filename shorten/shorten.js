module.exports = {
    shorten: (url) => {
      return new Promise((resolve, reject) => {
        const options = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`;
    
        https.get(options, (response) => {
          response.on('data', (data) => {
            resolve(data.toString());
          });
        }).on('error', (error) => {
          reject(error);
        });
      });
    }
  };
