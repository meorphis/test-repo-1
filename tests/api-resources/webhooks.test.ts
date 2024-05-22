// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import MeorphisTest41 from 'meorphis-test-41';
import { Response } from 'node-fetch';

const meorphisTest41 = new MeorphisTest41({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource webhooks', () => {
  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('create: only required params', async () => {
    const responsePromise = meorphisTest41.webhooks.create({
      event: { '.tag': 'group', event_group: 'all' },
      url: 'https://www.example.com/webhook',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  // skipped: currently no good way to test endpoints defining callbacks, Prism mock server will fail trying to reach the provided callback url
  test.skip('create: required and optional params', async () => {
    const response = await meorphisTest41.webhooks.create({
      event: { '.tag': 'group', event_group: 'all' },
      url: 'https://www.example.com/webhook',
    });
  });

  test('retrieve', async () => {
    const responsePromise = meorphisTest41.webhooks.retrieve('wh_za7VbYcSQU2zRgGQXQAm-g');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      meorphisTest41.webhooks.retrieve('wh_za7VbYcSQU2zRgGQXQAm-g', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(MeorphisTest41.NotFoundError);
  });

  test('list: only required params', async () => {
    const responsePromise = meorphisTest41.webhooks.list({ 'X-Publishable-Key': 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: required and optional params', async () => {
    const response = await meorphisTest41.webhooks.list({ 'X-Publishable-Key': 'string' });
  });

  test('delete', async () => {
    const responsePromise = meorphisTest41.webhooks.delete('wh_za7VbYcSQU2zRgGQXQAm-g');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      meorphisTest41.webhooks.delete('wh_za7VbYcSQU2zRgGQXQAm-g', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(MeorphisTest41.NotFoundError);
  });
});
