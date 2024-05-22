// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MeorphisTest41 from 'meorphis-test-41';
import { Response } from 'node-fetch';

const meorphisTest41 = new MeorphisTest41({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource identifiers', () => {
  test('list', async () => {
    const responsePromise = meorphisTest41.merchants.identifiers.list();
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      meorphisTest41.merchants.identifiers.list({ path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(MeorphisTest41.NotFoundError);
  });
});
