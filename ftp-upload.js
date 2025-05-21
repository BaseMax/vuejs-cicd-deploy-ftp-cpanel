import ftp from "basic-ftp";

async function upload() {
  const client = new ftp.Client();
  client.ftp.verbose = true;

  try {
    await client.access({
      host: process.env.FTP_HOST,
      port: Number(process.env.FTP_PORT) || 21,
      user: process.env.FTP_USERNAME,
      password: process.env.FTP_PASSWORD,
      secure: false,
    });

    console.log(`Connected to ${process.env.FTP_HOST}`);

    await client.ensureDir(process.env.FTP_PATH || "/");

    await client.clearWorkingDir();
    await client.uploadFromDir("dist");

    console.log("Upload completed!");
  } catch (err) {
    console.error("FTP upload failed:", err);
    process.exit(1);
  }
  client.close();
}

upload();
