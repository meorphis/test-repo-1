// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'meorphis-test-40/core';
import { APIResource } from 'meorphis-test-40/resource';
import * as AccountsAPI from 'meorphis-test-40/resources/testings/accounts';

export class Accounts extends APIResource {
  /**
   * Create a Bolt shopper account for testing purposes.
   */
  testingAccountCreate(
    body: AccountTestingAccountCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountTestingAccountCreateResponse> {
    return this._client.post('/testing/accounts', { body, ...options });
  }
}

export interface AccountTestingAccountCreateResponse {
  deactivate_at: string;

  email: string;

  email_state: 'missing' | 'unverified' | 'verified';

  oauth_code: string;

  otp_code: string;

  phone: string;

  phone_state: 'missing' | 'unverified' | 'verified';
}

export interface AccountTestingAccountCreateParams {
  deactivate_at: string;

  email_state: 'missing' | 'unverified' | 'verified';

  phone_state: 'missing' | 'unverified' | 'verified';

  has_address?: boolean;

  is_migrated?: boolean;
}

export namespace Accounts {
  export import AccountTestingAccountCreateResponse = AccountsAPI.AccountTestingAccountCreateResponse;
  export import AccountTestingAccountCreateParams = AccountsAPI.AccountTestingAccountCreateParams;
}
