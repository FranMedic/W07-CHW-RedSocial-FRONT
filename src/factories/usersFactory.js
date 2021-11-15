import ObjectID from "bson-objectid";
import { datatype, image, name } from "faker";
import { lorem } from "faker/locale/en";
import { Factory } from "fishery";

const factoryUsers = Factory.define(() => ({
  id: ObjectID(),
  name: name.firstName(),
  username: lorem.word(),
  password: lorem.word,
  photo: image.image,
  enemies: datatype.array(),
  friends: datatype.array(),
  bio: lorem.sentence(),
}));

export const getFakeUser = () => factoryUsers.build();
export const getFakeUsers = (total = 3) => factoryUsers.buildList(total);
