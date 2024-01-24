// File generated from our OpenAPI spec by Stainless.

package meorphistest9_test

import (
	"context"
	"os"
	"testing"

	meorphistest9 "github.com/meorphis/test-repo"
	"github.com/meorphis/test-repo/internal/testutil"
	"github.com/meorphis/test-repo/option"
)

func TestUsage(t *testing.T) {
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
	_, err := client.Pets.New(context.TODO(), meorphistest9.PetNewParams{
		ID:   meorphistest9.F(int64(0)),
		Name: meorphistest9.F("string"),
	})
	if err != nil {
		t.Error(err)
	}
}
