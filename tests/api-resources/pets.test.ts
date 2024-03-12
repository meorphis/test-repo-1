// File generated from our OpenAPI spec by Stainless.

import MeorphisTest9 from 'meorphis-test-9';
import { Response } from 'node-fetch';

const meorphisTest9 = new MeorphisTest9({
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource pets', () => {
  test('create: only required params', async () => {
    const responsePromise = meorphisTest9.pets.create({ id: 0, name: 'string' });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await meorphisTest9.pets.create({ id: 0, name: 'string', tag: 'string' });
  });

  test('retrieve', async () => {
    const responsePromise = meorphisTest9.pets.retrieve('string');
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
    await expect(meorphisTest9.pets.retrieve('string', { path: '/_stainless_unknown_path' })).rejects.toThrow(
      MeorphisTest9.NotFoundError,
    );
  });

  test('list', async () => {
    const responsePromise = meorphisTest9.pets.list();
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
    await expect(meorphisTest9.pets.list({ path: '/_stainless_unknown_path' })).rejects.toThrow(
      MeorphisTest9.NotFoundError,
    );
  });

  test('list: request options and params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(meorphisTest9.pets.list({ limit: 0 }, { path: '/_stainless_unknown_path' })).rejects.toThrow(
      MeorphisTest9.NotFoundError,
    );
  });
});
