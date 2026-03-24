import fs from "fs";
import YAML from "yaml";
import { faker } from "@faker-js/faker";

const SWAGGER_PATH = "docs/swagger.yaml";

function genLoginExample() {
  return {
    email: faker.internet.email(),
    password: faker.internet.password({ length: 10 }),
  };
}

function genOfferExample() {
  return {
    title: faker.lorem.words(3),
    description: faker.lorem.paragraph(),
    publishDate: faker.date.recent().toISOString().slice(0, 10),
    city: faker.helpers.arrayElement([
      "Amsterdam",
      "Paris",
      "Cologne",
      "Hamburg",
      "Dusseldorf",
      "Brussels"
    ]),
    isPremium: faker.datatype.boolean(),
    isFavorite: faker.datatype.boolean(),
    rating: faker.number.int({ min: 1, max: 5 }),
    type: faker.helpers.arrayElement(["apartment", "house", "room", "hotel"]),
    rooms: faker.number.int({ min: 1, max: 5 }),
    guests: faker.number.int({ min: 1, max: 8 }),
    price: faker.number.int({ min: 100, max: 100000 }),
    features: JSON.stringify([
      "Breakfast",
      "Air conditioning",
      "Laptop friendly workspace",
      "Baby seat",
      "Washer",
      "Towels",
      "Fridge"
    ]),
    commentsCount: faker.number.int({ min: 0, max: 50 }),
    latitude: Number(faker.location.latitude()),
    longitude: Number(faker.location.longitude()),
    userId: faker.number.int({ min: 1, max: 10 })
  };
}

function genCommentExample() {
  let comment = faker.lorem.text();
  while (comment.length < 50) {
    comment += " " + faker.lorem.text();
  }
  return {
    comment: comment.slice(0, 120),
    rating: Number(faker.number.float({ min: 1, max: 5, fractionDigits: 1 }))
  };
}

function genRegisterExample() {
  return {
    email: faker.internet.email(),
    password: faker.internet.password(),
    username: faker.person.firstName(),
    userType: faker.helpers.arrayElement(["pro", "regular"])
  };
}

const raw = fs.readFileSync(SWAGGER_PATH, "utf-8");
const doc = YAML.parse(raw);

const loginContent = doc?.paths?.["/login"]?.post?.requestBody?.content?.["application/json"];
if (!loginContent) {
  console.error("Не найден /login POST requestBody");
  process.exit(1);
}
loginContent.example = genLoginExample();

const offerSchema = doc?.paths?.["/offers"]?.post?.requestBody?.content?.["multipart/form-data"]?.schema;

if (offerSchema?.properties) {
  const example = genOfferExample();

  for (const key in example) {
    if (offerSchema.properties[key]) {
      offerSchema.properties[key].example = example[key];
    }
  }
}

const commentSchema = doc?.paths?.["/comments/{offerId}"]?.post?.requestBody?.content?.["application/json"]?.schema;

if (commentSchema?.properties) {
  const example = genCommentExample();

  for (const key in example) {
    if (commentSchema.properties[key]) {
      commentSchema.properties[key].example = example[key];
    }
  }
}

const registerSchema = doc?.paths?.["/register"]?.post?.requestBody?.content?.["multipart/form-data"]?.schema;

if (registerSchema?.properties) {
  const example = genRegisterExample();

  for (const key in example) {
    if (registerSchema.properties[key]) {
      registerSchema.properties[key].example = example[key];
    }
  }
}

const favoriteParams = doc?.paths?.["/favorite/{offerId}/{status}"]?.post?.parameters;

if (Array.isArray(favoriteParams)) {
  favoriteParams.forEach(param => {
    if (param.name === "offerId") {
      param.example = faker.number.int({ min: 1, max: 100 });
    }
    if (param.name === "status") {
      param.example = faker.helpers.arrayElement(["0", "1"]);
    }
  });
}

fs.writeFileSync(SWAGGER_PATH, YAML.stringify(doc), "utf-8");