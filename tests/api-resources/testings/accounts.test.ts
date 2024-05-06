// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MeorphisTest42 from 'meorphis-test-40';
import { Response } from 'node-fetch';

const meorphisTest42 = new MeorphisTest42({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource accounts', () => {
  test('testingAccountCreate: only required params', async () => {
    const responsePromise = meorphisTest42.testings.accounts.testingAccountCreate({
      deactivate_at: '2017-07-21T17:32:28Z',
      email_state: 'unverified',
      phone_state: 'verified',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('testingAccountCreate: required and optional params', async () => {
    const response = await meorphisTest42.testings.accounts.testingAccountCreate({
      deactivate_at: '2017-07-21T17:32:28Z',
      email_state: 'unverified',
      phone_state: 'verified',
      has_address: true,
      is_migrated: true,
    });
  });
});
