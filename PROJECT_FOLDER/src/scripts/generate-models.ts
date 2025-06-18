// generate-models.ts
import dotenv from "dotenv";
import SequelizeAuto from "sequelize-auto";

dotenv.config();

const auto = new SequelizeAuto(
  process.env.DB_NAME!,
  process.env.DB_USER!,
  process.env.DB_PASS!,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
    port: parseInt(process.env.DB_PORT || "5432"),
    directory: "./src/models",
    lang: "ts",
    caseModel: "p",
    caseFile: "k",
    singularize: false,
    useDefine: false,
    additional: {
      timestamps: true,
      createdAt: 'created_at',
      updatedAt: 'updated_at',
    },
  }
);

auto.run().then(() => {
  console.log("✅ Models generated successfully.");
}).catch((err: unknown) => {
  console.error("❌ Error generating models:", err);
});
