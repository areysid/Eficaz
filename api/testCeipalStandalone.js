import axios from 'axios';

const AUTH_URL = 'https://api.ceipal.com/v1/authenticate';
const JOBS_URL = 'https://api.ceipal.com/v1/job_postings';

const credentials = {
  username: 'neha@eficazindia.com',
  password: 'Neha@05260',
  apiKey: '5d12740ec96394c3757de779e900dfe09cf6c9a5697a79cda0af3381ee1a0784',
};

async function testCeipalApi() {
  try {
    const authResponse = await axios.post(AUTH_URL, credentials, {
      headers: { 'Content-Type': 'application/json' }
    });

    const token = authResponse.data.access_token;
    console.log('Bearer Token:', token);

    const jobsResponse = await axios.get(JOBS_URL, {
      headers: { Authorization: `Bearer ${token}` }
    });

    console.log('Jobs:', jobsResponse.data);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}

testCeipalApi();
