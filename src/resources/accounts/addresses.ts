// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as AddressesAPI from './addresses';

export class Addresses extends APIResource {
  /**
   * Edit an existing address on the shopper's account. This does not edit addresses
   * that are already associated with other resources, such as transactions or
   * shipments.
   */
  update(
    id: string,
    params: AddressUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AddressUpdateResponse> {
    const { 'X-Publishable-Key': xPublishableKey, ...body } = params;
    return this._client.put(`/account/addresses/${id}`, {
      body,
      ...options,
      headers: { 'X-Publishable-Key': xPublishableKey, ...options?.headers },
    });
  }

  /**
   * Delete an existing address. Deleting an address does not invalidate transactions
   * or shipments that are associated with it.
   */
  delete(id: string, params: AddressDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void> {
    const { 'X-Publishable-Key': xPublishableKey } = params;
    return this._client.delete(`/account/addresses/${id}`, {
      ...options,
      headers: { Accept: '*/*', 'X-Publishable-Key': xPublishableKey, ...options?.headers },
    });
  }

  /**
   * Add an address to the shopper's account
   */
  accountAddressCreate(
    params: AddressAccountAddressCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AddressAccountAddressCreateResponse> {
    const { 'X-Publishable-Key': xPublishableKey, ...body } = params;
    return this._client.post('/account/addresses', {
      body,
      ...options,
      headers: { 'X-Publishable-Key': xPublishableKey, ...options?.headers },
    });
  }
}

export interface AddressUpdateResponse {
  id: string;

  country_code: string;

  first_name: string;

  last_name: string;

  locality: string;

  postal_code: string;

  street_address1: string;

  company?: string;

  email?: string;

  is_default?: boolean;

  phone?: string;

  region?: string;

  street_address2?: string;
}

export interface AddressAccountAddressCreateResponse {
  id: string;

  country_code: string;

  first_name: string;

  last_name: string;

  locality: string;

  postal_code: string;

  street_address1: string;

  company?: string;

  email?: string;

  is_default?: boolean;

  phone?: string;

  region?: string;

  street_address2?: string;
}

export interface AddressUpdateParams {
  /**
   * Body param:
   */
  country_code: string;

  /**
   * Body param:
   */
  first_name: string;

  /**
   * Body param:
   */
  last_name: string;

  /**
   * Body param:
   */
  locality: string;

  /**
   * Body param:
   */
  postal_code: string;

  /**
   * Body param:
   */
  street_address1: string;

  /**
   * Header param: The publicly viewable identifier used to identify a merchant
   * division.
   */
  'X-Publishable-Key': string;

  /**
   * Body param:
   */
  company?: string;

  /**
   * Body param:
   */
  email?: string;

  /**
   * Body param:
   */
  is_default?: boolean;

  /**
   * Body param:
   */
  phone?: string;

  /**
   * Body param:
   */
  region?: string;

  /**
   * Body param:
   */
  street_address2?: string;
}

export interface AddressDeleteParams {
  /**
   * The publicly viewable identifier used to identify a merchant division.
   */
  'X-Publishable-Key': string;
}

export interface AddressAccountAddressCreateParams {
  /**
   * Body param:
   */
  country_code: string;

  /**
   * Body param:
   */
  first_name: string;

  /**
   * Body param:
   */
  last_name: string;

  /**
   * Body param:
   */
  locality: string;

  /**
   * Body param:
   */
  postal_code: string;

  /**
   * Body param:
   */
  street_address1: string;

  /**
   * Header param: The publicly viewable identifier used to identify a merchant
   * division.
   */
  'X-Publishable-Key': string;

  /**
   * Body param:
   */
  company?: string;

  /**
   * Body param:
   */
  email?: string;

  /**
   * Body param:
   */
  is_default?: boolean;

  /**
   * Body param:
   */
  phone?: string;

  /**
   * Body param:
   */
  region?: string;

  /**
   * Body param:
   */
  street_address2?: string;
}

export namespace Addresses {
  export import AddressUpdateResponse = AddressesAPI.AddressUpdateResponse;
  export import AddressAccountAddressCreateResponse = AddressesAPI.AddressAccountAddressCreateResponse;
  export import AddressUpdateParams = AddressesAPI.AddressUpdateParams;
  export import AddressDeleteParams = AddressesAPI.AddressDeleteParams;
  export import AddressAccountAddressCreateParams = AddressesAPI.AddressAccountAddressCreateParams;
}
