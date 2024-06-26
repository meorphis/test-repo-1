// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as CallbacksAPI from './callbacks';
import * as IdentifiersAPI from './identifiers';

export class Merchants extends APIResource {
  callbacks: CallbacksAPI.Callbacks = new CallbacksAPI.Callbacks(this._client);
  identifiers: IdentifiersAPI.Identifiers = new IdentifiersAPI.Identifiers(this._client);
}

export namespace Merchants {
  export import Callbacks = CallbacksAPI.Callbacks;
  export import CallbackListResponse = CallbacksAPI.CallbackListResponse;
  export import CallbackMerchantCallbacksUpdateResponse = CallbacksAPI.CallbackMerchantCallbacksUpdateResponse;
  export import CallbackListParams = CallbacksAPI.CallbackListParams;
  export import CallbackMerchantCallbacksUpdateParams = CallbacksAPI.CallbackMerchantCallbacksUpdateParams;
  export import Identifiers = IdentifiersAPI.Identifiers;
  export import IdentifierListResponse = IdentifiersAPI.IdentifierListResponse;
}
