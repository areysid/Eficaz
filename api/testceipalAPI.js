import { getBearerToken, fetchJobPostings } from './ceipal';

async function testCeipalIntegration() {
  try {
    const token = await getBearerToken();
    console.log('Bearer Token:', token);

    const jobs = await fetchJobPostings(token);
    console.log('Job Postings:', jobs);
  } catch (error) {
    console.error('Error:', error.response ? error.response.data : error.message);
  }
}

testCeipalIntegration();
