// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MeorphisTest40 from 'meorphis-test-40';
import { Response } from 'node-fetch';

const meorphisTest40 = new MeorphisTest40({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource exists', () => {
  test('list: only required params', async () => {
    const responsePromise = meorphisTest40.accounts.exists.list({
      identifier: { identifier_type: 'email', identifier_value: 'alice@example.com' },
      'X-Publishable-Key': 'string',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await meorphisTest40.accounts.exists.list({
      identifier: { identifier_type: 'email', identifier_value: 'alice@example.com' },
      'X-Publishable-Key': 'string',
    });
  });
});
