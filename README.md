# Verify Lambda Function

AWS Lambda function to verify insurance using the VerifyTreatment API.

## Environment Variables

- `VERIFYTX_API_KEY`: API key from VerifyTx

## Input JSON

POST body:

```json
{
  "first_name": "Jane",
  "last_name": "Doe",
  "dob": "1990-01-01",
  "member_id": "123456789",
  "payer_id": "12345"
}
