# File generated from our OpenAPI spec by Stainless.

from __future__ import annotations

import os
from typing import Any, cast

import pytest

from tests.utils import assert_matches_type
from meorphis_test_9 import MeorphisTest9, AsyncMeorphisTest9
from meorphis_test_9.types import Pet, Pets

base_url = os.environ.get("TEST_API_BASE_URL", "http://127.0.0.1:4010")


class TestPets:
    parametrize = pytest.mark.parametrize("client", [False, True], indirect=True, ids=["loose", "strict"])

    @parametrize
    def test_method_create(self, client: MeorphisTest9) -> None:
        pet = client.pets.create(
            id=0,
            name="string",
        )
        assert pet is None

    @parametrize
    def test_method_create_with_all_params(self, client: MeorphisTest9) -> None:
        pet = client.pets.create(
            id=0,
            name="string",
            tag="string",
        )
        assert pet is None

    @parametrize
    def test_raw_response_create(self, client: MeorphisTest9) -> None:
        response = client.pets.with_raw_response.create(
            id=0,
            name="string",
        )

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        pet = response.parse()
        assert pet is None

    @parametrize
    def test_streaming_response_create(self, client: MeorphisTest9) -> None:
        with client.pets.with_streaming_response.create(
            id=0,
            name="string",
        ) as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            pet = response.parse()
            assert pet is None

        assert cast(Any, response.is_closed) is True

    @parametrize
    def test_method_retrieve(self, client: MeorphisTest9) -> None:
        pet = client.pets.retrieve(
            "string",
        )
        assert_matches_type(Pet, pet, path=["response"])

    @parametrize
    def test_raw_response_retrieve(self, client: MeorphisTest9) -> None:
        response = client.pets.with_raw_response.retrieve(
            "string",
        )

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        pet = response.parse()
        assert_matches_type(Pet, pet, path=["response"])

    @parametrize
    def test_streaming_response_retrieve(self, client: MeorphisTest9) -> None:
        with client.pets.with_streaming_response.retrieve(
            "string",
        ) as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            pet = response.parse()
            assert_matches_type(Pet, pet, path=["response"])

        assert cast(Any, response.is_closed) is True

    @parametrize
    def test_path_params_retrieve(self, client: MeorphisTest9) -> None:
        with pytest.raises(ValueError, match=r"Expected a non-empty value for `pet_id` but received ''"):
            client.pets.with_raw_response.retrieve(
                "",
            )

    @parametrize
    def test_method_list(self, client: MeorphisTest9) -> None:
        pet = client.pets.list()
        assert_matches_type(Pets, pet, path=["response"])

    @parametrize
    def test_method_list_with_all_params(self, client: MeorphisTest9) -> None:
        pet = client.pets.list(
            limit=0,
        )
        assert_matches_type(Pets, pet, path=["response"])

    @parametrize
    def test_raw_response_list(self, client: MeorphisTest9) -> None:
        response = client.pets.with_raw_response.list()

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        pet = response.parse()
        assert_matches_type(Pets, pet, path=["response"])

    @parametrize
    def test_streaming_response_list(self, client: MeorphisTest9) -> None:
        with client.pets.with_streaming_response.list() as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            pet = response.parse()
            assert_matches_type(Pets, pet, path=["response"])

        assert cast(Any, response.is_closed) is True


class TestAsyncPets:
    parametrize = pytest.mark.parametrize("async_client", [False, True], indirect=True, ids=["loose", "strict"])

    @parametrize
    async def test_method_create(self, async_client: AsyncMeorphisTest9) -> None:
        pet = await async_client.pets.create(
            id=0,
            name="string",
        )
        assert pet is None

    @parametrize
    async def test_method_create_with_all_params(self, async_client: AsyncMeorphisTest9) -> None:
        pet = await async_client.pets.create(
            id=0,
            name="string",
            tag="string",
        )
        assert pet is None

    @parametrize
    async def test_raw_response_create(self, async_client: AsyncMeorphisTest9) -> None:
        response = await async_client.pets.with_raw_response.create(
            id=0,
            name="string",
        )

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        pet = await response.parse()
        assert pet is None

    @parametrize
    async def test_streaming_response_create(self, async_client: AsyncMeorphisTest9) -> None:
        async with async_client.pets.with_streaming_response.create(
            id=0,
            name="string",
        ) as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            pet = await response.parse()
            assert pet is None

        assert cast(Any, response.is_closed) is True

    @parametrize
    async def test_method_retrieve(self, async_client: AsyncMeorphisTest9) -> None:
        pet = await async_client.pets.retrieve(
            "string",
        )
        assert_matches_type(Pet, pet, path=["response"])

    @parametrize
    async def test_raw_response_retrieve(self, async_client: AsyncMeorphisTest9) -> None:
        response = await async_client.pets.with_raw_response.retrieve(
            "string",
        )

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        pet = await response.parse()
        assert_matches_type(Pet, pet, path=["response"])

    @parametrize
    async def test_streaming_response_retrieve(self, async_client: AsyncMeorphisTest9) -> None:
        async with async_client.pets.with_streaming_response.retrieve(
            "string",
        ) as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            pet = await response.parse()
            assert_matches_type(Pet, pet, path=["response"])

        assert cast(Any, response.is_closed) is True

    @parametrize
    async def test_path_params_retrieve(self, async_client: AsyncMeorphisTest9) -> None:
        with pytest.raises(ValueError, match=r"Expected a non-empty value for `pet_id` but received ''"):
            await async_client.pets.with_raw_response.retrieve(
                "",
            )

    @parametrize
    async def test_method_list(self, async_client: AsyncMeorphisTest9) -> None:
        pet = await async_client.pets.list()
        assert_matches_type(Pets, pet, path=["response"])

    @parametrize
    async def test_method_list_with_all_params(self, async_client: AsyncMeorphisTest9) -> None:
        pet = await async_client.pets.list(
            limit=0,
        )
        assert_matches_type(Pets, pet, path=["response"])

    @parametrize
    async def test_raw_response_list(self, async_client: AsyncMeorphisTest9) -> None:
        response = await async_client.pets.with_raw_response.list()

        assert response.is_closed is True
        assert response.http_request.headers.get("X-Stainless-Lang") == "python"
        pet = await response.parse()
        assert_matches_type(Pets, pet, path=["response"])

    @parametrize
    async def test_streaming_response_list(self, async_client: AsyncMeorphisTest9) -> None:
        async with async_client.pets.with_streaming_response.list() as response:
            assert not response.is_closed
            assert response.http_request.headers.get("X-Stainless-Lang") == "python"

            pet = await response.parse()
            assert_matches_type(Pets, pet, path=["response"])

        assert cast(Any, response.is_closed) is True
