class AppConfig {
  // Backend urls:
  public readonly csrfTokenUrl = "http://localhost:4000/api/csrf-token";
  public readonly metadataUrl = "http://localhost:4000/api/metadata/";
  public readonly fetchMetadataUrl =
    "http://localhost:4000/api/fetch-metadata/";
}

export const appConfig = new AppConfig();
