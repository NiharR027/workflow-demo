export default ({ config }) => ({
  ...config,
  name: "NomNom",
  version: "2.16.5",
  scheme: "nomnom",
  notification: {
    icon: "./assets/icon.png",
  },
  ios: {
    buildNumber: "62",
    supportsTablet: true,
    associatedDomains: ["nom:nom.nom.online"],
    entitlements: {
      "aps-environment": "nom",
    },
    requireFullScreen: true,
  },
  android: {
    versionCode: 531,
    edgeToEdgeEnabled: false,
    blockedPermissions: ["android.permission.USE_FULL_SCREEN_INTENT"],
    package: "nom.nom",
    googleServicesFile: "./nomnomnom.json",
  },
});
