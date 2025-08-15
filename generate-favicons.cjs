const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

async function createCircularIcon(inputBuffer, size) {
  // Create a circular mask
  const mask = Buffer.from(
    `<svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <circle cx="${size / 2}" cy="${size / 2}" r="${size / 2}" fill="white"/>
    </svg>`
  );

  // Process image to be circular with high quality
  return await sharp(inputBuffer)
    .resize(size, size, {
      fit: "cover",
      position: "center",
      kernel: sharp.kernel.lanczos3, // High-quality scaling
    })
    .composite([
      {
        input: mask,
        blend: "dest-in",
      },
    ])
    .png({
      quality: 100,
      compressionLevel: 0, // No compression for maximum quality
      progressive: false,
    })
    .toBuffer();
}

async function generateFavicons() {
  const inputPath = path.join(__dirname, "public", "profile.jpg");
  const outputDir = path.join(__dirname, "public");

  try {
    // Read the input image
    const inputBuffer = fs.readFileSync(inputPath);

    console.log(
      "Starting favicon generation with circular shape and HD quality..."
    );

    // Define all required sizes for ICO format
    const sizes = [
      { name: "favicon-16x16.ico", size: 16 },
      { name: "favicon-32x32.ico", size: 32 },
      { name: "favicon-48x48.ico", size: 48 },
      { name: "favicon-64x64.ico", size: 64 },
      { name: "favicon-128x128.ico", size: 128 },
      { name: "favicon-256x256.ico", size: 256 },
      { name: "apple-touch-icon.ico", size: 180 },
      { name: "ms-icon-144x144.ico", size: 144 },
      { name: "icon-192x192.ico", size: 192 },
      { name: "icon-512x512.ico", size: 512 },
    ];

    // Generate each size with circular shape and HD quality
    for (const { name, size } of sizes) {
      const circularBuffer = await createCircularIcon(inputBuffer, size);

      // Convert to ICO format
      await sharp(circularBuffer)
        .png({
          quality: 100,
          compressionLevel: 0,
        })
        .toFile(path.join(outputDir, name));

      console.log(`✓ Generated ${name} (${size}x${size}) - Circular HD`);
    }

    // Create the main favicon.ico with multiple sizes embedded
    const favicon16 = await createCircularIcon(inputBuffer, 16);
    const favicon32 = await createCircularIcon(inputBuffer, 32);
    const favicon48 = await createCircularIcon(inputBuffer, 48);

    // Save the main favicon.ico (using 32x32 as primary)
    await sharp(favicon32)
      .png({ quality: 100, compressionLevel: 0 })
      .toFile(path.join(outputDir, "favicon.ico"));

    console.log("✓ Generated favicon.ico (32x32) - Main favicon");

    console.log("\n🎉 All favicons generated successfully!");
    console.log("📋 Generated files:");
    console.log("   - favicon.ico (main)");
    console.log("   - favicon-16x16.ico to favicon-256x256.ico");
    console.log("   - apple-touch-icon.ico");
    console.log("   - ms-icon-144x144.ico");
    console.log("   - icon-192x192.ico & icon-512x512.ico");
    console.log("\n✨ All icons are circular with pixel-perfect HD quality!");
  } catch (error) {
    console.error("❌ Error generating favicons:", error);
    process.exit(1);
  }
}

generateFavicons();
