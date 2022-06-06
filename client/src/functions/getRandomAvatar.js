import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export default async function getRandomAvatar(username) {
  return await axios
    .get(
      `https://api.multiavatar.com/4645646/${Math.round(
        Math.random() * 1000
      )}?apikey=${process.env.APIKEY}`
    )
    .then((res) => res.data);
}
