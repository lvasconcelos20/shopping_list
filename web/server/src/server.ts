import "dotenv/config";

import app from "@app";
import "@database";

app.listen(process.env.SERVER_PORT, () => {
  console.log(
    `🚀 Server running on http://localhost:${process.env.SERVER_PORT}`
  );
});
