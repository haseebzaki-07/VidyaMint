import Image from "next/image";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  return (
    <div>
      <LoginLink>Signin</LoginLink> {}
      <RegisterLink>Signup</RegisterLink>
    </div>
  );
}
