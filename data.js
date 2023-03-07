import { faker } from "https://cdn.skypack.dev/@faker-js/faker";

/**
 *
 * @returns email Object
 */
export default function data() {
  let obj = {
    From: faker.name.fullName(),
    To: faker.name.fullName(),
    Subject: "Leave application",
    Time: faker.date.future(),
    Message: faker.lorem.sentences(),
  };

  return obj;
}
