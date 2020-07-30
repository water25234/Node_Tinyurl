# Tinyurl
- Tinyurl

# Prerequisite
- Node.js
- Express FrameWork

# work project
- npm install
- node app.js

# Postman
curl --location --request POST 'http://localhost:3000/' \
--header 'Content-Type: application/json' \
--data-raw '{
    "url": "https://www.kkday.com/zh-tw"
}'

response 
{
    "url": "https://tinyurl.com/gsfkf85"
}


