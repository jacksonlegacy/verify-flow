import axios from 'axios';

export const handler = async (event) => {
  try {
    const body = typeof event.body === 'string' ? JSON.parse(event.body) : event.body;
    const { first_name, last_name, dob, member_id, payer_id } = body;

    if (!first_name || !last_name || !dob || !member_id || !payer_id) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields.' }),
      };
    }

    const response = await axios.post(
      'https://api.verifytx.com/v1/verify',
      {
        first_name,
        last_name,
        dob,
        member_id,
        payer_id
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.VERIFYTX_API_KEY}`
        }
      }
    );

    return {
      statusCode: 200,
      body: JSON.stringify(response.data)
    };

  } catch (error) {
    console.error('VerifyTx API error:', error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Verification failed.', details: error.message })
    };
  }
};
