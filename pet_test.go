// File generated from our OpenAPI spec by Stainless.

package meorphistest9_test

import (
	"context"
	"errors"
	"os"
	"testing"

	meorphistest9 "github.com/meorphis/test-repo"
	"github.com/meorphis/test-repo/internal/testutil"
	"github.com/meorphis/test-repo/option"
)

func TestPetNewWithOptionalParams(t *testing.T) {
	baseURL := "http://localhost:4010"
	if envURL, ok := os.LookupEnv("TEST_API_BASE_URL"); ok {
		baseURL = envURL
	}
	if !testutil.CheckTestServer(t, baseURL) {
		return
	}
	client := meorphistest9.NewClient(
		option.WithBaseURL(baseURL),
	)
	err := client.Pets.New(context.TODO(), meorphistest9.PetNewParams{
		ID:   meorphistest9.F(int64(0)),
		Name: meorphistest9.F("string"),
		Tag:  meorphistest9.F("string"),
	})
	if err != nil {
		var apierr *meorphistest9.Error
		if errors.As(err, &apierr) {
			t.Log(string(apierr.DumpRequest(true)))
		}
		t.Fatalf("err should be nil: %s", err.Error())
	}
}

func TestPetGet(t *testing.T) {
	baseURL := "http://localhost:4010"
	if envURL, ok := os.LookupEnv("TEST_API_BASE_URL"); ok {
		baseURL = envURL
	}
	if !testutil.CheckTestServer(t, baseURL) {
		return
	}
	client := meorphistest9.NewClient(
		option.WithBaseURL(baseURL),
	)
	_, err := client.Pets.Get(context.TODO(), "string")
	if err != nil {
		var apierr *meorphistest9.Error
		if errors.As(err, &apierr) {
			t.Log(string(apierr.DumpRequest(true)))
		}
		t.Fatalf("err should be nil: %s", err.Error())
	}
}

func TestPetListWithOptionalParams(t *testing.T) {
	baseURL := "http://localhost:4010"
	if envURL, ok := os.LookupEnv("TEST_API_BASE_URL"); ok {
		baseURL = envURL
	}
	if !testutil.CheckTestServer(t, baseURL) {
		return
	}
	client := meorphistest9.NewClient(
		option.WithBaseURL(baseURL),
	)
	_, err := client.Pets.List(context.TODO(), meorphistest9.PetListParams{
		Limit: meorphistest9.F(int64(0)),
	})
	if err != nil {
		var apierr *meorphistest9.Error
		if errors.As(err, &apierr) {
			t.Log(string(apierr.DumpRequest(true)))
		}
		t.Fatalf("err should be nil: %s", err.Error())
	}
}
