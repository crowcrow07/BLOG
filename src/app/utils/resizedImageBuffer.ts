import sharp from "sharp";

export default async function resizedImageBufferHandler(file: Buffer) {
  const imgBuffer = sharp(file);
  const { height } = await imgBuffer.metadata();

  let resizedImageBuffer: Buffer;
  if (height! > 400) {
    resizedImageBuffer = await imgBuffer
      .resize({ height: 400, fit: "contain" })
      .toFormat("jpeg", { quality: 70, force: true })
      .toBuffer();
  } else {
    resizedImageBuffer = await imgBuffer
      .toFormat("jpeg", { quality: 70 })
      .toBuffer();
  }

  return resizedImageBuffer;
}
