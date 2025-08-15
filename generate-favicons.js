const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

async function generateFavicons() {
  const inputPath = path.join(__dirname, "public", "profile.jpg");
  const outputDir = path.join(__dirname, "public");

  try {
    // Read the input image
    const inputBuffer = fs.readFileSync(inputPath);

    // Generate different sizes
    const sizes = [
      { name: "favicon-16x16.png", size: 16 },
      { name: "favicon-32x32.png", size: 32 },
      { name: "apple-touch-icon.png", size: 180 },
      { name: "ms-icon-144x144.png", size: 144 },
      { name: "icon-192x192.png", size: 192 },
      { name: "icon-512x512.png", size: 512 },
    ];

    // Process each size
    for (const { name, size } of sizes) {
      await sharp(inputBuffer)
        .resize(size, size, {
          fit: "cover",
          position: "center",
        })
        .png()
        .toFile(path.join(outputDir, name));

      console.log(`Generated ${name} (${size}x${size})`);
    }

    // Generate ICO file (using 32x32)
    await sharp(inputBuffer)
      .resize(32, 32, {
        fit: "cover",
        position: "center",
      })
      .png()
      .toFile(path.join(outputDir, "favicon.ico"));

    console.log("Generated favicon.ico (32x32)");
    console.log("All favicons generated successfully!");
  } catch (error) {
    console.error("Error generating favicons:", error);
  }
}

generateFavicons();
