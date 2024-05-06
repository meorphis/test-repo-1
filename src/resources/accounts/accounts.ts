// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'meorphis-test-40/core';
import { APIResource } from 'meorphis-test-40/resource';
import * as AccountsAPI from 'meorphis-test-40/resources/accounts/accounts';
import * as AddressesAPI from 'meorphis-test-40/resources/accounts/addresses';
import * as ExistsAPI from 'meorphis-test-40/resources/accounts/exists';
import * as PaymentMethodsAPI from 'meorphis-test-40/resources/accounts/payment-methods';

export class Accounts extends APIResource {
  addresses: AddressesAPI.Addresses = new AddressesAPI.Addresses(this._client);
  exists: ExistsAPI.Exists = new ExistsAPI.Exists(this._client);
  paymentMethods: PaymentMethodsAPI.PaymentMethods = new PaymentMethodsAPI.PaymentMethods(this._client);

  /**
   * Retrieve a shopper's account details, such as addresses and payment information
   */
  accountGet(
    params: AccountAccountGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountAccountGetResponse> {
    const { 'X-Publishable-Key': xPublishableKey } = params;
    return this._client.get('/account', {
      ...options,
      headers: { 'X-Publishable-Key': xPublishableKey, ...options?.headers },
    });
  }
}

export interface AccountAccountGetResponse {
  addresses: Array<AccountAccountGetResponse.Address>;

  payment_methods: Array<AccountAccountGetResponse.PaymentMethod>;

  profile?: AccountAccountGetResponse.Profile;
}

export namespace AccountAccountGetResponse {
  export interface Address {
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

  export interface PaymentMethod {
    '.tag': 'credit_card';

    /**
     * The expiration date of the credit card. TODO TO MAKE EXPIRATION REUSABLE
     */
    expiration: string;

    /**
     * The last 4 digits of the credit card number.
     */
    last4: string;

    /**
     * The credit card network.
     */
    network: 'visa' | 'mastercard' | 'amex' | 'discover' | 'jcb' | 'unionpay' | 'alliancedata' | 'citiplcc';

    type: unknown;

    id?: string;

    /**
     * The ID of credit card's billing address
     */
    billing_address_id?: string;
  }

  export interface Profile {
    /**
     * An email address.
     */
    email?: string;

    /**
     * The given name of the person associated with this record.
     */
    first_name?: string;

    /**
     * The last name of the person associated with this record.
     */
    last_name?: string;

    /**
     * A phone number following E164 standards, in its globalized format, i.e.
     * prepended with a plus sign.
     */
    phone?: string;
  }
}

export interface AccountAccountGetParams {
  /**
   * The publicly viewable identifier used to identify a merchant division.
   */
  'X-Publishable-Key': string;
}

export namespace Accounts {
  export import AccountAccountGetResponse = AccountsAPI.AccountAccountGetResponse;
  export import AccountAccountGetParams = AccountsAPI.AccountAccountGetParams;
  export import Addresses = AddressesAPI.Addresses;
  export import AddressUpdateResponse = AddressesAPI.AddressUpdateResponse;
  export import AddressAccountAddressCreateResponse = AddressesAPI.AddressAccountAddressCreateResponse;
  export import AddressUpdateParams = AddressesAPI.AddressUpdateParams;
  export import AddressDeleteParams = AddressesAPI.AddressDeleteParams;
  export import AddressAccountAddressCreateParams = AddressesAPI.AddressAccountAddressCreateParams;
  export import Exists = ExistsAPI.Exists;
  export import ExistListParams = ExistsAPI.ExistListParams;
  export import PaymentMethods = PaymentMethodsAPI.PaymentMethods;
  export import PaymentMethodAccountAddPaymentMethodResponse = PaymentMethodsAPI.PaymentMethodAccountAddPaymentMethodResponse;
  export import PaymentMethodDeleteParams = PaymentMethodsAPI.PaymentMethodDeleteParams;
  export import PaymentMethodAccountAddPaymentMethodParams = PaymentMethodsAPI.PaymentMethodAccountAddPaymentMethodParams;
}
