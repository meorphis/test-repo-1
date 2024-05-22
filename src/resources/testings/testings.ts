// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AccountsAPI from './accounts';
import * as CreditCardsAPI from './credit-cards';
import * as ShipmentsAPI from './shipments';

export class Testings extends APIResource {
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
  creditCards: CreditCardsAPI.CreditCards = new CreditCardsAPI.CreditCards(this._client);
  shipments: ShipmentsAPI.Shipments = new ShipmentsAPI.Shipments(this._client);
}

export namespace Testings {
  export import Accounts = AccountsAPI.Accounts;
  export import AccountTestingAccountCreateResponse = AccountsAPI.AccountTestingAccountCreateResponse;
  export import AccountTestingAccountCreateParams = AccountsAPI.AccountTestingAccountCreateParams;
  export import CreditCards = CreditCardsAPI.CreditCards;
  export import CreditCardListResponse = CreditCardsAPI.CreditCardListResponse;
  export import Shipments = ShipmentsAPI.Shipments;
  export import ShipmentTestingShipmentTrackingCreateParams = ShipmentsAPI.ShipmentTestingShipmentTrackingCreateParams;
}
