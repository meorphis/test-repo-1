# File generated from our OpenAPI spec by Stainless.

from __future__ import annotations

from typing_extensions import Required, TypedDict

__all__ = ["PetCreateParams"]


class PetCreateParams(TypedDict, total=False):
    id: Required[int]

    name: Required[str]

    tag: str
