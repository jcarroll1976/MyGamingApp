export const platformLogos: Record<string,string> = {
    "pc": require("./assets/pc_logo.png"), // Replace with your image path
    "playstation": require("./assets/playstation_logo.png"), // Replace with your image path
    "xbox": require("./assets/xbox_logo.png"), // Replace with your image path
    "nintendo": require("./src/nintendo-7794.png")
    // Add more platforms and logos as needed
  };

  export function getPlatformLogo(platformName: string): string | undefined {
    platformName = platformName.toLowerCase(); // Ensure lowercase comparison
    return platformLogos[platformName];
  }